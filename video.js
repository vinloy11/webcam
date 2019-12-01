(function() {
    var video = document.getElementById('video'),
        vendorUrl = window.URL || window.webkitURL;
    navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.
        mozGetUserMedia || navigator.msGetUserMedia;
    navigator.getMedia({
        video: true,
        audio: false
    }, function(stream) {
        video.srcObject=stream;
        video.play();
    }, function(error) {
        alert('Ошибка! Что-то пошло не так, попробуйте позже.');
    });
})();