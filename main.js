function start()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hbGPeIOV1/', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}