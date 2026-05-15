const __VLS_props = defineProps();
const emit = defineEmits();
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['chat-form']} */ ;
/** @type {__VLS_StyleScopedClasses['mic']} */ ;
/** @type {__VLS_StyleScopedClasses['mic']} */ ;
/** @type {__VLS_StyleScopedClasses['submit']} */ ;
/** @type {__VLS_StyleScopedClasses['form-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['chat-form']} */ ;
/** @type {__VLS_StyleScopedClasses['mic']} */ ;
/** @type {__VLS_StyleScopedClasses['submit']} */ ;
/** @type {__VLS_StyleScopedClasses['submit']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-wrap" },
});
/** @type {__VLS_StyleScopedClasses['form-wrap']} */ ;
if (__VLS_ctx.listening) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "recording-hint" },
    });
    /** @type {__VLS_StyleScopedClasses['recording-hint']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ onSubmit: (...[$event]) => {
            __VLS_ctx.emit('submit');
            // @ts-ignore
            [listening, emit,];
        } },
    ...{ class: "chat-form" },
    ...{ class: ({ recording: __VLS_ctx.listening }) },
});
/** @type {__VLS_StyleScopedClasses['chat-form']} */ ;
/** @type {__VLS_StyleScopedClasses['recording']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.emit('voice');
            // @ts-ignore
            [listening, emit,];
        } },
    type: "button",
    ...{ class: "mic" },
    ...{ class: ({ active: __VLS_ctx.listening }) },
    'aria-label': (__VLS_ctx.listening ? 'Остановить запись' : 'Начать запись'),
    disabled: (__VLS_ctx.loading),
});
/** @type {__VLS_StyleScopedClasses['mic']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
if (__VLS_ctx.listening) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "pulse" },
        'aria-hidden': "true",
    });
    /** @type {__VLS_StyleScopedClasses['pulse']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
    viewBox: "0 0 24 24",
    'aria-hidden': "true",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.path)({
    d: "M12 14.8a3.5 3.5 0 0 0 3.5-3.5V6.1a3.5 3.5 0 0 0-7 0v5.2a3.5 3.5 0 0 0 3.5 3.5Zm6.1-3.8a1 1 0 1 0-2 0 4.1 4.1 0 1 1-8.2 0 1 1 0 1 0-2 0 6.1 6.1 0 0 0 5.1 6v2.5H8.6a1 1 0 1 0 0 2h6.8a1 1 0 1 0 0-2H13V17a6.1 6.1 0 0 0 5.1-6Z",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.textarea)({
    ...{ onInput: (...[$event]) => {
            __VLS_ctx.emit('update:modelValue', $event.target.value);
            // @ts-ignore
            [listening, listening, listening, emit, loading,];
        } },
    value: (__VLS_ctx.modelValue),
    placeholder: "Спросите что угодно",
    rows: "1",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    type: "submit",
    ...{ class: "submit" },
    'aria-label': (__VLS_ctx.loading ? 'Отправка' : 'Отправить'),
    disabled: (__VLS_ctx.loading),
});
/** @type {__VLS_StyleScopedClasses['submit']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
    viewBox: "0 0 24 24",
    'aria-hidden': "true",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.path)({
    d: "M8.7 4.7a1 1 0 0 0 0 1.4L14.6 12l-5.9 5.9a1 1 0 0 0 1.4 1.4l6.6-6.6a1 1 0 0 0 0-1.4L10.1 4.7a1 1 0 0 0-1.4 0Z",
});
// @ts-ignore
[loading, loading, modelValue,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
export default {};
