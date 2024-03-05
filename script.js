
// let file = document.getElementById("imgField").files[0];
//   console.log(file);

//   let reader = new FileReader();
//   reader.readAsDataURL(file);

//   // Set image
//   reader.onloadend = function () {
//     document.getElementById("my-img").src = reader.result;
//   }



let submit = () => {
    let fn = document.getElementById('fname').value;
    let ln = document.getElementById('lname').value;
    let r=document.getElementById('role').value;
    let o=document.getElementById('obj').value;
    let pn = document.getElementById('phone').value;
    let mail = document.getElementById('email').value;
    let lnk = document.getElementById('linkedin').value;
    let git = document.getElementById('git').value;
    let tnm = document.getElementById('tenmark').value;
    let tns = document.getElementById('tenschool').value;
    let tnl = document.getElementById('tenlocation').value;
    let twm = document.getElementById('twelvemark').value;
    let tws = document.getElementById('twelveschool').value;
    let twl = document.getElementById('twelvelocation').value;
    let cm = document.getElementById('collegemark').value;
    let s=document.getElementById('spec').value;
    let c = document.getElementById('college').value;
    let cl = document.getElementById('collegelocation').value;
    let we = document.getElementById('workexp').value;
    let c1 = document.getElementById('c1').value;
    let c2 = document.getElementById('c2').value;
    let c3 = document.getElementById('c3').value;
    let s1 = document.getElementById('s1').value;
    let s2 = document.getElementById('s2').value;
    let s3 = document.getElementById('s3').value;
    let d = document.getElementById('dec').value;



    var user = {
        firstname: fn,
        lastname: ln,
        role:r,
        objective:obj,
        phonenumber: pn,
        email: mail,
        linkedInLink: lnk,
        githubLink: git,
        tenthPerentage: tnm,
        tenthSchool: tns,
        tenthLocation: tnl,
        twelthPercentage: twm,
        twelthSchool: tws,
        twelthLocation: twl,
        collegePercentage: cm,
        specialization:s,
        collegeName: c,
        collegeLoation: cl,
        workexperience: we,
        certifiaction1: c1,
        certification2: c2,
        certification3: c3,
        skill1: s1,
        skill2: s2,
        skill3: s3,
        declaration:d

    };
    localStorage.setItem('user', JSON.stringify(user));
    alert('All details are saved');
    console.log(user);
}
document.getElementById('btn1').addEventListener('click', submit);
document.getElementById('btn2').addEventListener('click', () => {
    const res = JSON.parse(localStorage.getItem('user'));
    if (res) {
        const print = window.open('', '_blank');
        const basic=print.document.createElement("div");
        basic.innerHTML=`
           <h1>${res.firstname} ${res.lastname}</h1>
           <h4>${res.role} </h4><hr>`;
        
        print.document.body.appendChild(basic);
        
        
        const objec=print.document.createElement("div");
        objec.innerHTML=`
             <h1><u>Career Objective:</u></h1>
             <p>${res.objective}</p><hr>`;
        print.document.body.appendChild(objec);

        const basicTwo=print.document.createElement("div");
        basicTwo.innerHTML=`
             <h1><u>Contact Details:</u></h1>
             <h4>Mobile Number:${res.phonenumber}</h4>
             <h4>E-mail Id:${res.email}</h4>
             <h4>LinkedIn Link:${res.linkedInLink} </h4>            
             <h4>GitHub Link:${res.githubLink}</h4><hr>`;
        print.document.body.appendChild(basicTwo);

        const basic3=print.document.createElement("div");
        basic3.innerHTML = `
            <h1><u>Educational Qualifications:</h1>
            <h3><u>SSLC</u></h3>
            <h4>School Name:${res.tenthSchool}</h4>
            <h4>Tenth Percentage:${res.tenthPerentage}</h4>
            <h4>Place:${res.tenthLocation}</h4>
            <h3><u>HSC</u></h3>
            <h4>School Name:${res.twelthSchool}</h4>
            <h4>HSC Percentage:${res.twelthPerentage}</h4>
            <h4>Place:${res.twelthLocation}</h4>
            <h3><u>Under Graduation</u></h3>
            <h4>College Name:${res.collegeName}</h4>
            <h4>Percentage of Marks:${res.collegePercentage}</h4>
            <h4>Specialization:${res.specialization}</h4>
            <h4>Place:${res.tenthLocation}</h4><hr>`;
        print.document.body.appendChild(basic3);
        
        
        const basic4=print.document.createElement("div");
        basic4.innerHTML=`
             <h1><u>Work Experience:</u></h1>
             <p>${res.workexperience}</p><hr>`;
        print.document.body.appendChild(basic4);


        const basic5=print.document.createElement("div");
        basic5.innerHTML=`
             <h1><u>Certifications:</u></h1>
             <ul><li>${res.certifiaction1}</li>
             <li>${res.certification2}</li>
             <li>${res.certification3}</li><hr>`;
        print.document.body.appendChild(basic5);


        const basic6=print.document.createElement("div");
        basic6.innerHTML=`
             <h1><u>Skills:</u></h1>
             <ul><li>${res.skill1}</li>
             <li>${res.skill2}</li>
             <li>${res.skill3}</li><hr>`;
        print.document.body.appendChild(basic6);


        const dec=print.document.createElement("div");
        dec.innerHTML=`
             <h1><u>Declaration:</u></h1>
             <p>${res.declaration}</p>`;
        print.document.body.appendChild(dec);

    }


});