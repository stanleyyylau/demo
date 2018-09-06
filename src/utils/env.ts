export function isClientSideRendering() {
    const isNode = typeof process !== 'undefined' &&
        process.versions != null &&
        process.versions.node != null;

    return !isNode;
}
