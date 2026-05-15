import { ref } from 'vue';
export function useVoiceInput(message, error) {
    const listening = ref(false);
    const recognition = ref(null);
    const shouldListen = ref(false);
    const finalTranscript = ref('');
    const restartTimer = ref(null);
    const clearRestartTimer = () => {
        if (restartTimer.value) {
            window.clearTimeout(restartTimer.value);
            restartTimer.value = null;
        }
    };
    const stopVoiceInput = () => {
        shouldListen.value = false;
        clearRestartTimer();
        const activeRecognition = recognition.value;
        recognition.value?.stop();
        recognition.value = null;
        listening.value = false;
        if (activeRecognition) {
            activeRecognition.onend = null;
            activeRecognition.onerror = null;
            activeRecognition.onresult = null;
        }
    };
    const createRecognition = (SpeechRecognition) => {
        const speechRecognition = new SpeechRecognition();
        speechRecognition.lang = 'ru-RU';
        speechRecognition.continuous = true;
        speechRecognition.interimResults = true;
        speechRecognition.onstart = () => {
            listening.value = true;
            error.value = '';
        };
        speechRecognition.onresult = (event) => {
            let interimTranscript = '';
            for (let index = event.resultIndex; index < event.results.length; index += 1) {
                const result = event.results[index];
                const transcript = result?.[0]?.transcript || '';
                if (result?.isFinal) {
                    finalTranscript.value = `${finalTranscript.value} ${transcript}`.trim();
                }
                else {
                    interimTranscript = `${interimTranscript} ${transcript}`.trim();
                }
            }
            message.value = `${finalTranscript.value} ${interimTranscript}`.trim();
        };
        speechRecognition.onerror = (event) => {
            if (event.error === 'no-speech' || event.error === 'aborted') {
                return;
            }
            if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
                error.value = 'Разрешите доступ к микрофону в браузере';
                shouldListen.value = false;
                return;
            }
            if (event.error === 'audio-capture') {
                error.value = 'Микрофон не найден или недоступен';
                shouldListen.value = false;
                return;
            }
            error.value = 'Не удалось распознать речь, попробуйте еще раз';
        };
        speechRecognition.onend = () => {
            recognition.value = null;
            if (!shouldListen.value) {
                listening.value = false;
                return;
            }
            clearRestartTimer();
            restartTimer.value = window.setTimeout(() => {
                if (!shouldListen.value || recognition.value) {
                    return;
                }
                const nextRecognition = createRecognition(SpeechRecognition);
                recognition.value = nextRecognition;
                nextRecognition.start();
            }, 250);
        };
        return speechRecognition;
    };
    const startVoiceInput = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            error.value = 'Ваш браузер не поддерживает голосовой ввод';
            return;
        }
        if (shouldListen.value || recognition.value) {
            stopVoiceInput();
            return;
        }
        clearRestartTimer();
        error.value = '';
        shouldListen.value = true;
        finalTranscript.value = message.value.trim();
        const speechRecognition = createRecognition(SpeechRecognition);
        recognition.value = speechRecognition;
        try {
            speechRecognition.start();
        }
        catch {
            shouldListen.value = false;
            recognition.value = null;
            listening.value = false;
            error.value = 'Не удалось запустить запись';
        }
    };
    return {
        listening,
        startVoiceInput,
        stopVoiceInput,
    };
}
