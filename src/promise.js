import utils from './utils';

export default function(index) {
    const bodyUrl = `/api/body/${utils.randomNumber(4)}`;
    const eyesUrl = `/api/eye/${utils.randomNumber(15)}`;
    const mouthUrl = `/api/mouth/${utils.randomNumber(12)}`;

    let promises = [
        utils.promiseRequest(bodyUrl, index),
        utils.promiseRequest(eyesUrl, index),
        utils.promiseRequest(mouthUrl, index)
    ];

    Promise.all(promises)
        .then(function(images) {
            utils.mountImage(images, index);
        })
        .catch(error => console.log(error));
    
    // return utils.promiseRequest(bodyUrl, index)
    //     .then(function(image1) {
    //         utils.mountImage(image1, index); 
    //         return utils.promiseRequest(eyesUrl, index) 
    //     })
    //     .then(function(image2) {
    //         utils.mountImage(image2, index); 
    //         return utils.promiseRequest(mouthUrl, index) 
    //     })
    //     .then(function(image3) { 
    //         utils.mountImage(image3, index);
    //         console.log(typeof image1, typeof image2, typeof image3);
    //     })
    //     .catch(function(err) { console.log(err) })
}