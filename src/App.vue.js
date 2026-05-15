import ChatForm from '@/components/ChatForm.vue';
import ChatResult from '@/components/ChatResult.vue';
import { useChat } from '@/composables/useChat';
import { useVoiceInput } from '@/composables/useVoiceInput';
const { message, messages, error, loading, sendMessage } = useChat();
const { listening, startVoiceInput } = useVoiceInput(message, error);
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['chat-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['hero']} */ ;
/** @type {__VLS_StyleScopedClasses['intro']} */ ;
/** @type {__VLS_StyleScopedClasses['greeting']} */ ;
/** @type {__VLS_StyleScopedClasses['subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['chat-area']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.main, __VLS_intrinsics.main)({
    ...{ class: "page" },
});
/** @type {__VLS_StyleScopedClasses['page']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "hero" },
});
/** @type {__VLS_StyleScopedClasses['hero']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "chat-icon" },
    'aria-hidden': "true",
});
/** @type {__VLS_StyleScopedClasses['chat-icon']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
    viewBox: "0 0 24 24",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.path)({
    d: "M7.2 8.1h9.6a3.4 3.4 0 0 1 3.4 3.4v.8a3.4 3.4 0 0 1-3.4 3.4h-3.7l-3.4 2.9v-2.9H7.2a3.4 3.4 0 0 1-3.4-3.4v-.8a3.4 3.4 0 0 1 3.4-3.4Z",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "intro" },
});
/** @type {__VLS_StyleScopedClasses['intro']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "greeting" },
});
/** @type {__VLS_StyleScopedClasses['greeting']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "subtitle" },
});
/** @type {__VLS_StyleScopedClasses['subtitle']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "chat-area" },
});
/** @type {__VLS_StyleScopedClasses['chat-area']} */ ;
const __VLS_0 = ChatResult;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    error: (__VLS_ctx.error),
    messages: (__VLS_ctx.messages),
    loading: (__VLS_ctx.loading),
}));
const __VLS_2 = __VLS_1({
    error: (__VLS_ctx.error),
    messages: (__VLS_ctx.messages),
    loading: (__VLS_ctx.loading),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_5 = ChatForm;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    ...{ 'onSubmit': {} },
    ...{ 'onVoice': {} },
    modelValue: (__VLS_ctx.message),
    loading: (__VLS_ctx.loading),
    listening: (__VLS_ctx.listening),
}));
const __VLS_7 = __VLS_6({
    ...{ 'onSubmit': {} },
    ...{ 'onVoice': {} },
    modelValue: (__VLS_ctx.message),
    loading: (__VLS_ctx.loading),
    listening: (__VLS_ctx.listening),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
let __VLS_10;
const __VLS_11 = ({ submit: {} },
    { onSubmit: (__VLS_ctx.sendMessage) });
const __VLS_12 = ({ voice: {} },
    { onVoice: (__VLS_ctx.startVoiceInput) });
var __VLS_8;
var __VLS_9;
// @ts-ignore
[error, messages, loading, loading, message, listening, sendMessage, startVoiceInput,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
