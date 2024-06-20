let currentStep = 0;

function nextStep() {
    const steps = document.querySelectorAll('.form-step');
    steps[currentStep].classList.remove('active');
    currentStep++;
    if (currentStep < steps.length) {
        steps[currentStep].classList.add('active');
    } else {
        document.getElementById('devForm').style.display = 'none';
        document.getElementById('result').innerHTML = "<h2>Obrigado por completar o formulário!<br> Em breve entraremos em contato com a trilha ideal para você.</h2>";
    }
}

function submitForm() {
    nextStep();
}
