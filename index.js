function Calculate() {
    let dob = document.getElementById('DOB').value;
    let givenDate = document.getElementById('GivenDate').value;

    let d_b = dob.split("-");

    let arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let Date_of_birth = {
        year: parseInt(d_b[0]),
        month: parseInt(d_b[1]),
        day: parseInt(d_b[2])
    };

    let g_d = givenDate.split("-");

    let Given_Date = {
        year: parseInt(g_d[0]),
        month: parseInt(g_d[1]), 
        day: parseInt(g_d[2])
    };

    if (Given_Date.year < Date_of_birth.year) {
        alert("Date of Birth needs to be earlier than the age at date.");
        exit(0);
    }

    else if (Given_Date.year == Date_of_birth.year) {
        if (Given_Date.month < Date_of_birth.month) {
            alert("Date of Birth needs to be earlier than the age at date.");
            exit(0);
        }
        else if (Given_Date.month == Date_of_birth.month) {
            if (Given_Date.day < Date_of_birth.day) {
                alert("Date of Birth needs to be earlier than the age at date.");
                exit(0);
            }
        }
    }

    let r_y, r_m, r_d;

    //day calculate

    if (Given_Date.day >= Date_of_birth.day) {
        r_d = Given_Date.day - Date_of_birth.day;
    }
    else {
        r_d = arr[Given_Date.month - 1] + Given_Date.day - Date_of_birth.day;
        Given_Date.month -= 1;
    }

    //month calculate

    if (Given_Date.month >= Date_of_birth.month) {
        r_m = Given_Date.month - Date_of_birth.month;
    }
    else {
        r_m = 12 + Given_Date.month - Date_of_birth.month;
        Given_Date.year -= 1;
    }

    //year calculate

    if (Given_Date.year >= Date_of_birth.year) {
        r_y = Given_Date.year - Date_of_birth.year;
    }

    let count = 0;

    //Leap Year Calculation
    for ( let i = Date_of_birth.year ; i <= Given_Date.year ; i++ )
    {
        if ( i % 4 == 0 && i % 100 != 0 || i % 400 == 0 )
        {
            count++;
        }
    }

    r_d += count;

    if ( r_d > 30 )
    {
        r_m++;
        r_d -= 30;
        if ( r_m >= 12)
        {
            r_y++;
            r_m -= 12;
        }
    }


    document.getElementById('head').innerHTML = `Your Age:`;
    document.getElementById('age').innerHTML = `${r_y} years ${r_m} months ${r_d} days`;

}