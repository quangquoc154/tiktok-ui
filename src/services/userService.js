import * as httpRequest from '~/utils/httpRequest';

export const getSuggested = async (page, perPage) => {
    try {
        const res = await httpRequest.get('users/suggested', {
            params: {
                page,
                per_page: perPage,
            },
        });
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
