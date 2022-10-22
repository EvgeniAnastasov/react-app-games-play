const requiest = async (method, url, data) => {

    try {
        let buildRequest;

        if (method === 'GET') {
            buildRequest = fetch(url);
        }
        else {
            buildRequest = fetch(url, {
                method,
                heareds: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        }

        const response = await buildRequest;

        const result = await response.json();

        return result;

    } catch (error) {
        console.log(error);
    }
}


export const get = requiest.bind({}, 'GET');
export const post = requiest.bind({}, 'POST');
export const patch = requiest.bind({}, 'PATCH');
export const put = requiest.bind({}, 'PUT');
export const del = requiest.bind({}, 'DELETE');