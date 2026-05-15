import { nextTick, ref, watch } from 'vue';
const props = defineProps();
const historyRef = ref(null);
watch(() => [props.messages.length, props.loading, props.error], async () => {
    await nextTick();
    if (historyRef.value) {
        historyRef.value.scrollTop = historyRef.value.scrollHeight;
    }
});
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['message-row']} */ ;
/** @type {__VLS_StyleScopedClasses['message-row']} */ ;
/** @type {__VLS_StyleScopedClasses['user']} */ ;
/** @type {__VLS_StyleScopedClasses['bubble']} */ ;
/** @type {__VLS_StyleScopedClasses['assistant']} */ ;
/** @type {__VLS_StyleScopedClasses['bubble']} */ ;
/** @type {__VLS_StyleScopedClasses['bubble']} */ ;
/** @type {__VLS_StyleScopedClasses['typing']} */ ;
/** @type {__VLS_StyleScopedClasses['typing']} */ ;
/** @type {__VLS_StyleScopedClasses['typing']} */ ;
/** @type {__VLS_StyleScopedClasses['chat-history']} */ ;
/** @type {__VLS_StyleScopedClasses['bubble']} */ ;
if (__VLS_ctx.messages.length || __VLS_ctx.error || __VLS_ctx.loading) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ref: "historyRef",
        ...{ class: "chat-history" },
    });
    /** @type {__VLS_StyleScopedClasses['chat-history']} */ ;
    for (const [message] of __VLS_vFor((__VLS_ctx.messages))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            key: (message.id),
            ...{ class: "message-row" },
            ...{ class: (message.role) },
        });
        /** @type {__VLS_StyleScopedClasses['message-row']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "bubble" },
        });
        /** @type {__VLS_StyleScopedClasses['bubble']} */ ;
        (message.text);
        // @ts-ignore
        [messages, messages, error, loading,];
    }
    if (__VLS_ctx.loading) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "message-row assistant" },
        });
        /** @type {__VLS_StyleScopedClasses['message-row']} */ ;
        /** @type {__VLS_StyleScopedClasses['assistant']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "bubble typing" },
        });
        /** @type {__VLS_StyleScopedClasses['bubble']} */ ;
        /** @type {__VLS_StyleScopedClasses['typing']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    }
    if (__VLS_ctx.error) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "message-row assistant" },
        });
        /** @type {__VLS_StyleScopedClasses['message-row']} */ ;
        /** @type {__VLS_StyleScopedClasses['assistant']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "bubble error" },
        });
        /** @type {__VLS_StyleScopedClasses['bubble']} */ ;
        /** @type {__VLS_StyleScopedClasses['error']} */ ;
        (__VLS_ctx.error);
    }
}
// @ts-ignore
[error, error, loading,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
