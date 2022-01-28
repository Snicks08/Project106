function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_jNmVvKOS/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if (error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
        r = Math.floor(Math.random()*255) + 1;
        g = Math.floor(Math.random()*255) + 1;
        b = Math.floor(Math.random()*255) + 1;
        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("accuracy_label").innerHTML = "Accuracy: " + results[0].confidence;
        document.getElementById("result_label").style.color = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById("accuracy_label").style.color = "rgb(" + r + "," + g + "," + b + ")";
    }
}