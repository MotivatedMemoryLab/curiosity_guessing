/*
 * Requires:
 *     psiturk.js
 *     utils.js
 */
//test

// Initalize psiturk object
var psiTurk = new PsiTurk(uniqueId, adServerLoc, mode);

// All pages to be loaded
var pages = [
	"instructions/instruct-all-versions.html",
    "stage_versions/stage.html",
    "postquestionnaire.html",
    "stage_versions/stage_OCFA.html",
    "stage_versions/stage_OCFS.html",
    "stage_versions/stage_OCUA.html",
    "stage_versions/stage_OCUS.html",
    "stage_versions/stage_OCEA.html",
    "stage_versions/stage_OCES.html",
    "stage_versions/stage_OPFA.html",
    "stage_versions/stage_OPFS.html",
    "stage_versions/stage_OPUA.html",
    "stage_versions/stage_OPUS.html",
    "stage_versions/stage_OPEA.html",
    "stage_versions/stage_OPES.html",
    "stage_versions/stage_CCFA.html",
    "stage_versions/stage_CCFS.html",
    "stage_versions/stage_CCUA.html",
    "stage_versions/stage_CCUS.html",
    "stage_versions/stage_CCEA.html",
    "stage_versions/stage_CCES.html",
    "stage_versions/stage_CPFA.html",
    "stage_versions/stage_CPFS.html",
    "stage_versions/stage_CPUA.html",
    "stage_versions/stage_CPUS.html",
    "stage_versions/stage_CPEA.html",
    "stage_versions/stage_CPES.html",
];

psiTurk.preloadPages(pages);

var instructionPages = [
	"instructions/instruct-all-versions.html"
];

var stageHtmlName = {
    1: {stageFile: "stage_versions/stage_CCFA.html", controlled:true, studyType: "CCFA"},
    2: {stageFile: "stage_versions/stage_CCFS.html", controlled:true, studyType: "CCFS"},
    3: {stageFile: "stage_versions/stage_CCUA.html", controlled:true, studyType: "CCUA"},
    4: {stageFile: "stage_versions/stage_CCUS.html", controlled:true, studyType: "CCUS"},
    5: {stageFile: "stage_versions/stage_CCEA.html", controlled:true, studyType: "CCEA"},
    6: {stageFile: "stage_versions/stage_CCES.html", controlled:true, studyType: "CCES"},
    7: {stageFile: "stage_versions/stage_CPFA.html", controlled:true, studyType: "CPFA"},
    8: {stageFile: "stage_versions/stage_CPFS.html", controlled:true, studyType: "CPFS"},
    9: {stageFile: "stage_versions/stage_CPUA.html", controlled:true, studyType: "CPUA"},
    10: {stageFile: "stage_versions/stage_CPUS.html", controlled:true, studyType: "CPUS"},
    11: {stageFile: "stage_versions/stage_CPEA.html", controlled:true, studyType: "CPEA"},
    12: {stageFile: "stage_versions/stage_CPES.html", controlled:true, studyType: "CPES"},
    13: {stageFile: "stage_versions/stage_OCFA.html", controlled:false, studyType: "OCFA"},
    14: {stageFile: "stage_versions/stage_OCFS.html", controlled:false, studyType: "OCFS"},
    15: {stageFile: "stage_versions/stage_OCUA.html", controlled:false, studyType: "OCUA"},
    16: {stageFile: "stage_versions/stage_OCUS.html", controlled:false, studyType: "OCUS"},
    17: {stageFile: "stage_versions/stage_OCEA.html", controlled:false, studyType: "OCEA"},
    18: {stageFile: "stage_versions/stage_OCES.html", controlled:false, studyType: "OCES"},
    19: {stageFile: "stage_versions/stage_OPFA.html", controlled:false, studyType: "OPFA"},
    20: {stageFile: "stage_versions/stage_OPFS.html", controlled:false, studyType: "OPFS"},
    21: {stageFile: "stage_versions/stage_OPUA.html", controlled:false, studyType: "OPUA"},
    22: {stageFile: "stage_versions/stage_OPUS.html", controlled:false, studyType: "OPUS"},
    23: {stageFile: "stage_versions/stage_OPEA.html", controlled:false, studyType: "OPEA"},
    24: {stageFile: "stage_versions/stage_OPES.html", controlled:false, studyType: "OPES"}
};

/********************
* HTML manipulation
*
* All HTML files in the templates directory are requested
* from the server when the PsiTurk object is created above. We
* need code to get those pages from the PsiTurk object and
* insert them into the document.
*
********************/

var Curiosity = function(stage_version) {
    psiTurk.showPage(stage_version.stageFile);
    window.moveTo(0, 0);
    window.resizeTo(screen.width, screen.height);

    Vue.use(VueFire);
    var app = new Vue({
        el: "#app",
        data: {
            videoList: [
                {src: "static/videos/brain.mp4", type: "video/mp4", answer: "Brain"},
                {src: "static/videos/astronaut.mp4", type: "video/mp4", answer: "Astronaut"},
                {src: "static/videos/bananas.mp4", type: "video/mp4", answer: "Bananas"},
                {src: "static/videos/bellpepper.mp4", type: "video/mp4", answer: "Bell Pepper"},
                {src: "static/videos/ballerina.mp4", type: "video/mp4", answer: "Ballerina"},
                {src: "static/videos/bull.mp4", type: "video/mp4", answer: "Bull"},
                {src: "static/videos/cappuccino.mp4", type: "video/mp4", answer: "Cappuccino"},
                {src: "static/videos/car.mp4", type: "video/mp4", answer: "Car"},
                {src: "static/videos/dog.mp4", type: "video/mp4", answer: "Dog"},
                {src: "static/videos/gamecontroller.mp4", type: "video/mp4", answer: "Game Controller"},
                {src: "static/videos/harp.mp4", type: "video/mp4", answer: "Harp"},
                {src: "static/videos/headphones.mp4", type: "video/mp4", answer: "Headphones"},
                {src: "static/videos/hotairballoon.mp4", type: "video/mp4", answer: "Hot Air Balloon"},
                {src: "static/videos/microscope.mp4", type: "video/mp4", answer: "Microscope"},
                {src: "static/videos/palmtree.mp4", type: "video/mp4", answer: "Palm Tree"},
                {src: "static/videos/pizza.mp4", type: "video/mp4", answer: "Pizza"},
                {src: "static/videos/pencil.mp4", type: "video/mp4", answer: "Pencil"},
                {src: "static/videos/pineapple.mp4", type: "video/mp4", answer: "Pineapple"},
                {src: "static/videos/ram.mp4", type: "video/mp4", answer: "Ram"},
                {src: "static/videos/rose.mp4", type: "video/mp4", answer: "Rose"},
                {src: "static/videos/saxophone.mp4", type: "video/mp4", answer: "Saxophone"},
                {src: "static/videos/sneaker.mp4", type: "video/mp4", answer: "Sneaker"},
                {src: "static/videos/surfer.mp4", type: "video/mp4", answer: "Surfer"},
                {src: "static/videos/taco.mp4", type: "video/mp4", answer: "Taco"},
                {src: "static/videos/jellyfish.mp4", type: "video/mp4", answer: "Jelly Fish"},
            ],

            videoListExtra: [
                // {src: "static/videos/pomegranate.mp4", type: "video/mp4", answer: "Pomegranate"},
                {src: "static/videos/squirrel.mp4", type: "video/mp4", answer: "Squirrel"},
                {src: "static/videos/pancakes.mp4", type: "video/mp4", answer: "Pancakes"},
                {src: "static/videos/elephant.mp4", type: "video/mp4", answer: "Elephant"},
                {src: "static/videos/golfer.mp4", type: "video/mp4", answer: "Golfer"},
                {src: "static/videos/guitar.mp4", type: "video/mp4", answer: "Guitar"},
                // {src: "static/videos/lizard.mp4", type: "video/mp4", answer: "Lizard"},
                // {src: "static/videos/lungs.mp4", type: "video/mp4", answer: "Lungs"},
                // {src: "static/videos/wave.mp4", type: "video/mp4", answer: "Wave"},
                // {src: "static/videos/walrus.mp4", type: "video/mp4", answer: "Walrus"},
                // {src: "static/videos/scale.mp4", type: "video/mp4", answer: "Scale"},
                // {src: "static/videos/skateboard.mp4", type: "video/mp4", answer: "Skateboard"},
                // {src: "static/videos/panda.mp4", type: "video/mp4", answer: "Panda"},
                // {src: "static/videos/cactus.mp4", type: "video/mp4", answer: "Cactus"},
                {src: "static/videos/laptop.mp4", type: "video/mp4", answer: "Laptop"},
                {src: "static/videos/lightbulb.mp4", type: "video/mp4", answer: "Light Bulb"},
                {src: "static/videos/tiger.mp4", type: "video/mp4", answer: "Tiger"},
                {src: "static/videos/hand.mp4", type: "video/mp4", answer: "Hand"},
                // {src: "static/videos/bike.mp4", type: "video/mp4", answer: "Bike"},
                // {src: "static/videos/books.mp4", type: "video/mp4", answer: "Books"},
                // {src: "static/videos/nut.mp4", type: "video/mp4", answer: "Nut"},
                {src: "static/videos/icecream.mp4", type: "video/mp4", answer: "Ice Cream"},
                // {src: "static/videos/airplane.mp4", type: "video/mp4", answer: "Airplane"},
                // {src: "static/videos/bottle.mp4", type: "video/mp4", answer: "Bottle"},
                // {src: "static/videos/chef.mp4", type: "video/mp4", answer: "Chef"},
                // {src: "static/videos/candle.mp4", type: "video/mp4", answer: "Candle"},
            ],

            //Variables set once per study
            subjectId: "",
            version: stage_version.studyType,
            endStudy: false,
            vidCount: 24,
            isControlled: stage_version.controlled,

            //Variables collected once per trial
            videoIndex: 0,
            numStops: 0,
            finalGuess: "",
            sameAsBefore: false,
            finalGuessPlaceholder: "",
            trialAnswer: "",
            surpriseValue: 50,
            surpriseDontKnow: false,
            satisfyValue: 50,
            appealValue: 50,
            upcomingCuriosityValue: 50,
            answeredSurpriseValue: 0,
            answeredSatisfyValue: 0,
            answeredAppealValue: 0,
            answeredUpcomingCuriosityValue: 0,
            arrayMade: 0,
            vidDurr: 0.0,
            videoBool: false,
            replayCount: 0,
            replay: false,
            cutShort: false,

            //Within Trial placeholders
            videoGuess: "",
            submitTime: 0,
            percentageSubmit: 0,
            alreadyKnow: false,
            curiosityValue: 50,
            finishValue: 50,
            confidenceValue: 50,
            predictValue: 15,
            unsettledValue: 50,
            enjoyValue: 50,
            frustrateValue: 50,
            answeredPredictValue: 0,
            answeredUnsettledValue: 0,
            answeredEnjoyValue: 0,
            answeredFrustrateValue: 0,
            answeredCuriosityValue: 0,
            answeredFinishValue: 0,
            answeredConfidenceValue: 0,
            validVideoGuess: 0,
            iterIndex: 0,
            stoppedEarly: false,

            //Variables collected multiple times a trial
            guessList: [],
            submitTimeList: [],
            percentageSubmitList: [],
            alreadyKnowList: [],
            curiosityList: [],
            finishList: [],
            confidenceList: [],
            predictList: [],
            unsettledList: [],
            enjoyList: [],
            frustrateList: [],
            stopsArray: [],
            stopsPercentArray: [],
            percentageStops: [],
            vidCurrTime: 0.0,
            stoppedEarlyList: [],
            data: [],
        },
        computed: {
            // return todos that match the currently selected filter
            filteredTodos() {
                return filters[this.visibility](this.todos);
            }
        },
        firebase: {
//        accounts: usersRef,
//        profilePics: imgRef
        },
        methods: {
            startExp() {
                // for normally run experiment (videos are all randomized)
                document.getElementById("welcome").style.display = "none";
                document.getElementById("startExp").style.display = "block";
                window.scrollTo(0,0);
                this.videoBool = true;
                //for original videoList
                var currentIndex = this.videoList.length;
                var temporaryValue;
                var randomIndex;
                while (0 !== currentIndex) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;
                    temporaryValue = this.videoList[currentIndex];

                    this.videoList[currentIndex] = this.videoList[randomIndex];
                    this.videoList[randomIndex] = temporaryValue;
                }
                //for extra videoList
                var currentIndexEX = this.videoListExtra.length;
                var temporaryValueEX;
                var randomIndexEX;
                while (0 !== currentIndexEX) {
                    randomIndexEX = Math.floor(Math.random() * currentIndexEX);
                    currentIndexEX -= 1;
                    temporaryValueEX = this.videoListExtra[currentIndexEX];

                    this.videoListExtra[currentIndexEX] = this.videoListExtra[randomIndexEX];
                    this.videoListExtra[randomIndexEX] = temporaryValueEX;
                }
                this.videoList = this.videoList.concat(this.videoListExtra);
                // console.log(this.videoList)
            },
            continueToStart() {
                if (this.subjectId === "") {
                    alert("Please enter your Prolific ID");
                    return false;
                }
                console.log(this.subjectId);
                var myVideo = document.getElementById("video");
                myVideo.src = this.videoList[this.videoIndex].src;
                document.getElementById("startExp").style.display = "none";
                document.getElementById("video1").style.display = "block";
                document.getElementById("interruptionMeasure").style.display = "none";
                document.getElementById("terminateExperiment").style.display = "none";
                if (!this.isControlled) {
                    document.getElementById("videoGuess").style.dislay = "inline";
                    document.getElementById("videoGuess").select();
                    document.getElementById("videoGuess").focus();
                }
            },
            makeStops(){
                if (this.arrayMade !== 1) {
                    function randomInt(low, high) {
                        return Math.floor(Math.random() * (high - low + 1)) + low;
                    }
                    function getRndBias(min, max, bias, influence) {
                        let rnd = Math.random() * (max - min + 1) + min;
                        let mix = Math.random() * influence;
                        return Math.floor(rnd * (1 - mix) + bias * mix);
                    }
                    //Get new random stops
                    this.numStops = getRndBias(1, 3, 2.5, 0.8);
                    // console.log(this.numStops);
                    //for study 2, not using a bias but constraining selection of stops to between 2-3 (more stops)

                    let quartiles = [];
                    if (this.numStops === 1) {
                        let num = randomInt(1, 2);
                        quartiles.push(num);
                    } else {
                        while (quartiles.length < this.numStops) {
                            let num = randomInt(0, 3);
                            if (!quartiles.includes(num)) {
                                quartiles.push(num);
                            }
                        }
                    }
                    quartiles.sort();
                    let stops = [];
                    let stopsPercent = [];
                    for (let i = 0; i < quartiles.length;i++){
                        let inner = 0;
                        if (quartiles[i] === 3) {
                            inner = Math.random() * 0.75;
                        } else if (quartiles[i] === 0) {
                            inner = Math.random() * 0.7 + 0.25;
                        } else {
                            inner = Math.random() * 0.9 + 0.05;
                        }
                        let quartLength = this.vidDurr * 0.25;
                        let innerLength = inner * quartLength;
                        let timestamp = quartiles[i] * quartLength + innerLength;
                        let timestampPercent = timestamp / this.vidDurr;
                        stops.push(timestamp);
                        stopsPercent.push(timestampPercent);
                    }
                    this.stopsArray = stops.sort();
                    this.stopsPercentArray = stopsPercent.sort();
                }
            },
            makeVidDurr(){
                if(this.videoBool){
                    var myVideo = document.getElementById("video");
                    this.vidDurr = myVideo.duration;
                    if (this.arrayMade === 0){
                        myVideo.pause();
                        this.makeStops();
                        this.arrayMade = 1;
                        myVideo.play();
                    }
                }
            },
            pauseOnStops(){
                let myVideo = document.getElementById("video");
                if (myVideo === null) {
                    return;
                }
                if(this.replay) {
                    return;
                }
                function sorting(a, b) {
                    if (a === b)
                         return 0;
                    return a < b ? -1 : 1;
                }
                this.stopsArray.sort(sorting);
                if (myVideo.currentTime >= this.stopsArray[this.iterIndex] && this.iterIndex <= this.stopsArray.length){
                    myVideo.pause();
                    this.vidCurrTime = myVideo.currentTime;
                    document.getElementById("interruptionMeasure").style.display = "block";
                    document.getElementById("videoGuess").style.display = "inline";
                    document.getElementById("videoGuess").select();
                    if (this.videoIndex > this.vidCount) {
                        document.getElementById("terminateExperiment").style.display = "inline";
                    } else {
                        document.getElementById("terminateExperiment").style.display = "none";
                    }
                }
            },
            testGuessInput() {
              var myVideo = document.getElementById("video");
                if (this.videoGuess.length > 0) {
                    if (!myVideo.paused) {
                        myVideo.pause();
                    }
                    let keyCode = event.key || event.keyCode;
                    if (keyCode === 13 || keyCode === "Enter") {
                    this.checkVideoGuess(this.videoGuess);
                        if (this.validVideoGuess === 1) {
                            this.submitTime = myVideo.currentTime;
                            this.percentageSubmit = (myVideo.currentTime / myVideo.duration) * 100;
                            document.getElementById("interruptionMeasure").style.display = "block";
                            if (this.videoIndex > this.vidCount) {
                                document.getElementById("terminateExperiment").style.display = "inline";
                            } else {
                                document.getElementById("terminateExperiment").style.display = "none";
                            }
                        }
                    }
                }
                if (this.videoGuess.length < 1) {
                    myVideo.play();
                }
            },
            testInput(callback) {
                let myVideo = document.getElementById("video");
                this.checkVideoGuess(this.videoGuess);
                if ((this.answeredPredictValue === 1 || this.answeredConfidenceValue === 1) && (this.answeredCuriosityValue === 1 || this.alreadyKnow) && (this.answeredFrustrateValue === 1 || this.answeredEnjoyValue === 1 || this.answeredUnsettledValue === 1) && this.validVideoGuess === 1) {
                    myVideo.play();
                    this.iterIndex++;
                    this.guessList.push(this.videoGuess);
                    this.submitTimeList.push(this.submitTime);
                    this.percentageSubmitList.push(this.percentageSubmit);
                    this.curiosityList.push(this.curiosityValue);
                    this.predictList.push(this.predictValue);
                    this.confidenceList.push(this.confidenceValue);
                    this.unsettledList.push(this.unsettledValue);
                    this.enjoyList.push(this.enjoyValue);
                    this.frustrateList.push(this.frustrateValue);
                    this.alreadyKnowList.push(this.alreadyKnow ? 1 : 0);
                    this.stoppedEarlyList.push(this.stoppedEarly ? 1 : 0);
                    this.videoGuess = "";
                    this.validVideoGuess = 0;
                    this.alreadyKnow = false;
                    this.answeredCuriosityValue = 0;
                    this.answeredPredictValue = 0;
                    this.answeredConfidenceValue = 0;
                    this.answeredEnjoyValue = 0;
                    this.answeredFrustrateValue = 0;
                    this.answeredUnsettledValue = 0;
                    this.curiosityValue = 50;
                    this.predictValue = 15;
                    this.confidenceValue = 50;
                    this.enjoyValue = 50;
                    this.frustrateValue = 50;
                    this.unsettledValue = 50;

                    document.getElementById("interruptionMeasure").style.display = "none";
                    document.getElementById("terminateExperiment").style.display = "none";

                    if (!this.isControlled) {
                        document.getElementById("videoGuess").style.display = "inline";
                        document.getElementById("videoGuess").select();
                        document.getElementById("videoGuess").focus();
                    }
                    return true;

                } else {
                    alert("Please answer all questions");
                    return false;
                }
            },
            //function for advancing video to the end (stops reveal)
            advanceVideo() {
                this.cutShort = true;
                let myVideo = document.getElementById("video");
                myVideo.pause();
                this.checkVideoGuess(this.videoGuess);
                if ((this.answeredPredictValue === 1 || this.answeredConfidenceValue === 1) && (this.answeredCuriosityValue === 1 || this.alreadyKnow) && (this.answeredFrustrateValue === 1 || this.answeredEnjoyValue === 1 || this.answeredUnsettledValue === 1) && this.validVideoGuess === 1) {
                    this.stoppedEarly = true;
                    let test = this.testInput();
                    if (test) {
                        this.finishedVideo();
                    }
                } else {
                    alert("Please answer all questions");
                    return false;
                }
            },
            //function for skipping the video to the end (immediate reveal)
            skipToEnd() {
                this.cutShort = true;
                let myVideo = document.getElementById("video");
                myVideo.pause();
                this.checkVideoGuess(this.videoGuess);
                if ((this.answeredPredictValue === 1 || this.answeredConfidenceValue === 1) && (this.answeredCuriosityValue === 1 || this.alreadyKnow) && (this.answeredFrustrateValue === 1 || this.answeredEnjoyValue === 1 || this.answeredUnsettledValue === 1) && this.validVideoGuess === 1) {
                    this.stoppedEarly = true;
                    let test = this.testInput();
                    if (test) {
                        this.iterIndex = this.stopsArray.length;
                        myVideo.currentTime = myVideo.duration;
                        this.finishedVideo();
                    }
                } else {
                    alert("Please answer all questions");
                    return false;
                }

            },
            finishedVideo() { //guess=""
                var myVideo = document.getElementById("video");
                myVideo.pause();
                document.getElementById("videoGuess").style.display = "none";
                document.getElementById("interruptionMeasure").style.display = "none";
                document.getElementById("finalGuess").style.display = "inline";
                document.getElementById("curiosityMeasure").style.display = "block";
                document.getElementById("finalGuess").select();
                if (this.videoIndex >= this.vidCount) {
                    if (this.videoIndex === this.vidCount && this.replayCount === 0) {
                        alert("Last video of main task. The option to STOP THE GAME is now available");
                        document.getElementById("terminateExperiment").style.display = "inline";
                    } else {
                        document.getElementById("terminateExperiment").style.display = "inline";
                    }
                } else {
                    document.getElementById("terminateExperiment").style.display = "none";
                }
            },
            replayVideo() {
                this.checkVideoGuess(this.videoGuess);
                if ((this.validVideoGuess === 1 || this.sameAsBefore) && (this.answeredSurpriseValue === 1 || this.surpriseDontKnow) && this.answeredSatisfyValue === 1 && this.answeredAppealValue === 1 && this.answeredUpcomingCuriosityValue === 1) {
                    document.getElementById("videoGuess").style.display = "none";
                    document.getElementById("finalGuess").style.display = "none";
                    document.getElementById("curiosityMeasure").style.display = "none";
                    document.getElementById("terminateExperiment").style.display = "none";
                    this.replay = true;
                    this.replayCount = this.replayCount + 1;
                    let myVideo = document.getElementById("video");
                    myVideo.currentTime = '0';
                    myVideo.play();
                } else {
                    alert("Please answer all questions");
                    return false;
                }
            },
            nextVideo() {
                this.checkVideoGuess(this.videoGuess);
                if ((this.validVideoGuess === 1 || this.sameAsBefore) && (this.answeredSurpriseValue === 1 || this.surpriseDontKnow) && this.answeredSatisfyValue === 1 && this.answeredAppealValue === 1 && this.answeredUpcomingCuriosityValue === 1) {
                    psiTurk.recordTrialData({
                        subjectId: this.subjectId,
                        version: this.version,
                        trialNumber: this.videoIndex,
                        trialAnswer: this.videoList[this.videoIndex].answer,
                        guessList: this.guessList,
                        curiosityList: this.curiosityList,
                        confidenceList: this.confidenceList,
                        predictList: this.predictList,
                        frustrateList: this.frustrateList,
                        enjoyList: this.enjoyList,
                        unsettledList: this.unsettledList,
                        surpriseValue: this.surpriseValue,
                        satisfyValue: this.satisfyValue,
                        appealValue: this.appealValue,
                        upcomingCuriosityValue: this.upcomingCuriosityValue,
                        finalGuess: this.videoGuess,
                        numStops: this.numStops,
                        stopsArray: this.stopsArray,
                        stopsPercentArray: this.stopsPercentArray,
                        submitTimeList: this.submitTimeList,
                        percentageSubmitList: this.percentageSubmitList,
                        vidDurr: this.vidDurr,
                        alreadyKnowList: this.alreadyKnowList,
                        stoppedEarlyList: this.stoppedEarlyList,
                        sameAsBefore: this.sameAsBefore ? 1 : 0,
                        surpriseDontKnow: this.surpriseDontKnow ? 1 : 0,
                        replayCount: this.replayCount,
                        endStudy: this.endStudy ? 1 : 0,
                    });

                    document.getElementById("finalGuess").style.display = "none";
                    document.getElementById("curiosityMeasure").style.display = "none";
                    document.getElementById("terminateExperiment").style.display = "none";

                    this.videoIndex++;
                    this.videoGuess = "";
                    this.guessList = [];
                    this.alreadyKnow = false;
                    this.alreadyKnowList = [];
                    this.curiosityValue = 50;
                    this.curiosityList = [];
                    this.answeredCuriosityValue = 0;
                    this.confidenceValue = 50;
                    this.confidenceList = [];
                    this.answeredConfidenceValue = 0;
                    this.predictValue = 15;
                    this.predictList = [];
                    this.answeredPredictValue = 0;
                    this.frustrateValue = 50;
                    this.frustrateList = [];
                    this.answeredFrustrateValue = 0;
                    this.unsettledValue = 50;
                    this.unsettledList = [];
                    this.answeredUnsettledValue = 0;
                    this.enjoyValue = 50;
                    this.enjoyList = [];
                    this.answeredEnjoyValue = 0;
                    this.surpriseValue = 50;
                    this.satisfyValue = 50;
                    this.appealValue = 50;
                    this.upcomingCuriosityValue = 50;
                    this.answeredSurpriseValue = 0;
                    this.answeredSatisfyValue = 0;
                    this.answeredAppealValue = 0;
                    this.answeredUpcomingCuriosityValue = 0;
                    this.finalGuessPlaceholder = "";
                    this.finalGuess = "";
                    this.validVideoGuess = 0;
                    this.arrayMade = 0;
                    this.iterIndex = 0;
                    this.numStops = 0;
                    this.stopsArray = [];
                    this.stopsPercentArray = [];
                    this.submitTime = 0;
                    this.submitTimeList = [];
                    this.percentageSubmit = 0;
                    this.percentageSubmitList = [];
                    this.vidDurr = 0;
                    this.stoppedEarly = false;
                    this.stoppedEarlyList = [];
                    this.surpriseDontKnow = false;
                    this.replayCount = 0;
                    this.replay = false;
                    this.sameAsBefore = false;
                    this.cutShort = false;

                    this.midPointMarkers(this.videoIndex);
                    let myVideo = document.getElementById("video");

                    if (this.endStudy) {
                        currentview = new Questionnaire();
                    } else if ((!this.endStudy && this.videoIndex > this.videoList.length - 1)) {
                        alert("You have watched all of our videos! The Game will now end.");
                        currentview = new Questionnaire();
                    } else {
                        myVideo.src = this.videoList[this.videoIndex].src;
                        document.getElementById("interruptionMeasure").style.display = "none";
                        if (this.isControlled) {
                            document.getElementById("videoGuess").style.display = "none"; // inline is the other option
                        } else {
                            document.getElementById("videoGuess").style.display = "inline";
                            document.getElementById("videoGuess").select();
                            document.getElementById("videoGuess").focus();
                        }
                    }
                } else {
                    alert("Please answer all questions");
                }
            },
            terminateExp() {
                let myVideo = document.getElementById("video");
                if (myVideo.currentTime < myVideo.duration && !this.cutShort) {
                    var v = this.videoGuess;
                    if (this.testInput()) {
                        myVideo.pause();
                        this.videoGuess = v;
                        this.answeredSurpriseValue = 1;
                        this.answeredSatisfyValue = 1;
                        this.answeredAppealValue = 1;
                        this.answeredUpcomingCuriosityValue = 1;
                        this.endStudy = true;
                        this.nextVideo();
                    }
                } else {
                    var v = this.videoGuess;
                    this.checkVideoGuess(this.videoGuess);
                    this.videoGuess = v;
                    if ((this.validVideoGuess === 1 || this.sameAsBefore) && (this.answeredSurpriseValue === 1 || this.surpriseDontKnow) && this.answeredSatisfyValue === 1 && this.answeredAppealValue === 1 && this.answeredUpcomingCuriosityValue === 1) {
                        this.endStudy = true;
                        this.nextVideo();
                    } else {
                        alert("Please answer all questions");
                    }
                }
            },
            sliderFxn_curiosity() {
                var slider = document.getElementById("slider_cur");
                this.curiosityValue = slider.value;
                this.answeredCuriosityValue = 1;
                console.log(this.curiosityValue);
                console.log(this.answeredCuriosityValue)
            },
            sliderFxn_predict() {
                var slider = document.getElementById("slider_pre");
                this.predictValue = slider.value;
                this.answeredPredictValue = 1;
            },
            sliderFxn_confidence() {
                var slider = document.getElementById("slider_confidence");
                this.confidenceValue = slider.value;
                this.answeredConfidenceValue = 1;
            },
            sliderFxn_enjoy() {
                var slider = document.getElementById("slider_enjoy");
                this.enjoyValue = slider.value;
                this.answeredEnjoyValue = 1;
            },
            sliderFxn_frustrate() {
                var slider = document.getElementById("slider_frustrate");
                this.frustrateValue = slider.value;
                this.answeredFrustrateValue = 1;
            },
            sliderFxn_unsettled() {
                var slider = document.getElementById("slider_unsettled");
                this.unsettledValue = slider.value;
                this.answeredUnsettledValue = 1;
            },
            sliderFxn_surprise() {
                var slider = document.getElementById("slider_surprise");
                this.surpriseValue = slider.value;
                this.answeredSurpriseValue = 1;
            },
            sliderFxn_satisfy() {
                var slider = document.getElementById("slider_satisfy");
                this.satisfyValue = slider.value;
                this.answeredSatisfyValue = 1;
            },
            sliderFxn_appeal() {
                var slider = document.getElementById("slider_appeal");
                this.appealValue = slider.value;
                this.answeredAppealValue = 1;
            },
            sliderFxn_upcoming() {
                var slider = document.getElementById("slider_upcoming");
                this.upcomingCuriosityValue = slider.value;
                this.answeredUpcomingCuriosityValue = 1;
            },
            checkVideoGuess(videoGuess) {
                if (videoGuess.length <= 1 && this.sameAsBefore === false) {
                    alert("Please enter a guess more than 2 characters");
                }
                else {
                    this.validVideoGuess = 1;
                }
            },
            midPointMarkers(videoIndex) {
                if (videoIndex === 10) {
                    alert("15 videos left in main task");
                } else if (videoIndex === 20) {
                    alert("5 videos left in main task");
                }
            },
            setFocus() {
                setTimeout(()=>{
                    document.getElementById("videoGuess").focus();
                }, 50)
            },

        }
    })
};

var Questionnaire = function() {

	var error_message = "<h1>Oops!</h1><p>Something went wrong submitting your HIT. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";

	record_responses = function() {

		psiTurk.recordTrialData({'phase':'postquestionnaire', 'status':'submit'});

		$('textarea').each( function(i, val) {
			psiTurk.recordUnstructuredData(this.id, this.value);
		});
		$('select').each( function(i, val) {
			psiTurk.recordUnstructuredData(this.id, this.value);
		});

	};

	prompt_resubmit = function() {
		document.body.innerHTML = error_message;
		$("#resubmit").click(resubmit);
	};

	resubmit = function() {
		document.body.innerHTML = "<h1>Trying to resubmit...</h1>";
		reprompt = setTimeout(prompt_resubmit, 10000);

		psiTurk.saveData({
			success: function() {
			    clearInterval(reprompt);
			    psiTurk.completeHIT();
                // psiTurk.computeBonus('compute_bonus', function(){
                // 	psiTurk.completeHIT(); // when finished saving compute bonus, the quit
                // });
            },
			error: prompt_resubmit
		});
	};

	// Load the questionnaire snippet
	psiTurk.showPage('postquestionnaire.html');
	psiTurk.recordTrialData({'phase':'postquestionnaire', 'status':'begin'});

	$("#next").click(function () {
	    record_responses();
	    psiTurk.saveData({
            success: function(){
                psiTurk.completeHIT(); // when finished saving compute bonus, the quit
            //     }
            // });
            // success: function(){
            //     psiTurk.computeBonus('compute_bonus', function() {
            //     	psiTurk.completeHIT(); // when finished saving compute bonus, the quit
            //     });
            },
            error: prompt_resubmit});
	});

};
// Task object to keep track of the current phase
var currentview;

/*******************
 * Run Task
 ******************/

$(window).load(function () {
    //get random number 1 - 5
    var randomNumber = Math.floor(Math.random() * Math.floor(24)) + 1;
    psiTurk.doInstructions(
        instructionPages, // a list of pages you want to display in sequence
        function () {
            currentview = new Curiosity(stageHtmlName[randomNumber]);
        } // what you want to do when you are done with instructions
    );
});