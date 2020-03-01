import { CoreController } from './CoreController';
let core = new CoreController();
let spinButton = document.getElementById('spinbtn');
let spinResult = document.getElementById('spinres');
spinButton.addEventListener("click", function () {
    core.spin();
});
