export const load = (async ({depends, data}) => {
    depends('invalidate:me');

    return { num: Math.random()};
});