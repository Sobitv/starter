// DELGETSTEI AJILLAH CONTROLLER
var uiController = (function () {

})();
//SANHUUTEI AJILLAH CONTROLLER
var financeController = (function () {

})();
//Programmin holbogch controller
var appController = (function (uiController, financeController) {
    document.querySelector('.add__btn').addEventListener('click', function () {
        //1.oruulah ugugdliig delgetsees olj avna.
        console.log("Delgetsees ugugdluu avah heseg");
        //2.olj avsan ugugdliig sanhuugiin controllert damjuulj tend hadgalna.
        //3.olj avsan ugugdluudee web deer tohiroh hesegt gargana.
        //4.tusviig tootsoolno.
        //5.etssiin uldegdel tootsoog delgetsend gargana.
    });
    document.addEventListener('keypress', function (event) {
        console.log('tovch daragdlaa');
    })

})(uiController, financeController);