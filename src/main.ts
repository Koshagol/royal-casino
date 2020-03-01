import { CoreController } from './CoreController';
let core = new CoreController();
let spinButton = document.getElementById('spinbtn');
spinButton.addEventListener("click", function () {
    core.spin();
});
