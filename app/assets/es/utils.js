const Utils = {
    getJSONByPromise(url) {
        return new Promise(function(resolve, reject) {
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('get', url, true);
            xhr.onload = () => {
                if(xhr.status == 200) {
                    const data = (!xhr.responseType)?JSON.parse(xhr.response):xhr.response;
                    resolve(data);
                } else {
                    reject(status);
                }
            }
            xhr.onerror = () => {
                reject(Error('Network Error!'));
            }
            xhr.send(null);
        });
    },
};