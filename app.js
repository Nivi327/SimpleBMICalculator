document.querySelector('#calculate').addEventListener('click', (e) => {
    e.preventDefault();

    // console.log(e.target);
    let kg = document.getElementById('kgs').value;
    let cms = document.getElementById('mts').value;

    let mt = cms / 100;

    const bmi_tag = document.querySelector('.bmi_result');
    const pound_tag = document.querySelector('.pound_result');
    const ounce_tag = document.querySelector('.ounce_result');

    let bmi = (kg) / (mt*mt);

    let pound = 2.20462 * kg;

    let ounce = 35.274 * kg;

    condition = ""


    if(bmi < 18.4){
        condition += "Under Weight";
    }else if(bmi < 25.7){
        condition += "Normal";
    }else{
        condition += "Over weight";
    }

    bmi_tag.innerHTML = `${bmi} - ${condition}`;
    pound_tag.innerHTML = `${pound}`;
    ounce_tag.innerHTML = `${ounce}`;

    document.getElementById('kgs').value = '';
    document.getElementById('mts').value = '';
})