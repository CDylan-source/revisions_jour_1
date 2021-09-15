window.addEventListener('load', function () {
    document.body.style.backgroundColor = "black";
});

window.addEventListener('keydown', function (e) {
    if ((e.code.match(/Key.*/) && e.code != "KeyM") || e.code == "Semicolon") {
        if (e.code == "KeyR") {
            document.body.style.backgroundColor = "darkred";
        } else if (e.code == "KeyG") {
            document.body.style.backgroundColor = "lightgreen";
        } else if (e.code == "KeyB") {
            document.body.style.backgroundColor = "lightblue";
        } else if (e.code == "KeyP") {
            document.body.style.backgroundColor = "hotpink";
        } else if (e.code == "KeyY") {
            document.body.style.backgroundColor = "yellow";
        } else {
            document.body.style.backgroundColor = "white";
        }
    } else if (e.code == "ArrowUp") {
        document.querySelector('button').className = "visible";
    }
});

function verify_date(birthday) {
    if (!isNaN(birthday[0]) && !isNaN(birthday[1]) && !isNaN(birthday[2])) {
        let day = birthday[0];
        let month = birthday[1];
        let year = birthday[2];
        if (day > 31 && day <= 0) {
            window.alert("Des mois de plus de 31 jours ? Nope !");
        } else {
            if (month > 12 && month <= 0) {
                window.alert("Pas de 13ème mois et encore moins de plus que ça dans la réalité !");
            } else {
                let curr_date = new Date();

                let curr_year = curr_date.getFullYear();
                let curr_month = curr_date.getMonth() + 1;
                let curr_day = curr_date.getDay();
                console.log(curr_month);
                if (year > curr_year || (year == curr_year && curr_month < month) || (year == curr_year && curr_month == month && curr_day <= day)) {
                    window.alert("Tu n'es pas encore né-e !");
                } else if (month == 4 || month == 6 || month == 9 || month == 11) {
                    if (day < 31) {
                        if ((curr_day >= day && curr_month == month) || curr_month > month) {
                            let age = curr_year - year;
                            if (age >= 25) {
                                window.alert("Bienvenue");
                            } else {
                                let birthday = new Date((25 + parseInt(year)) + "-" + month + "-" + day + " " + curr_date.getHours() + ":" + curr_date.getMinutes() + ":" + (curr_date.getSeconds() + 1));
                                let diff = birthday - curr_date;
                                let aff = Math.floor(diff / (1000 * 3600 * 24));
                                window.alert("Il faut attendre encore " + aff + " jours")
                            }
                        } else {
                            let age = curr_year - (parseInt(year) + 1);

                            if (age >= 25) {
                                window.alert("Bienvenue");
                            } else {
                                let birthday = new Date((25 + parseInt(year)) + "-" + month + "-" + day + " " + curr_date.getHours() + ":" + curr_date.getMinutes() + ":" + (curr_date.getSeconds() + 1));
                                let diff = birthday - curr_date;
                                let aff = Math.floor(diff / (1000 * 3600 * 24));
                                window.alert("Il faut attendre encore " + aff + " jours")
                            }
                        }

                    } else {
                        window.alert("Il n'y a pas 31 jours dans ce mois pardi !");
                    }
                } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {

                    if (curr_day >= day && curr_month == month || curr_month > month) {
                        let age = curr_year - year;
                        if (age >= 25) {
                            window.alert("Bienvenue");
                        } else {
                            let birthday = new Date((25 + parseInt(year)) + "-" + month + "-" + day + " " + curr_date.getHours() + ":" + curr_date.getMinutes() + ":" + (curr_date.getSeconds() + 1));
                            let diff = birthday - curr_date;
                            let aff = Math.floor(diff / (1000 * 3600 * 24));
                            window.alert("Il faut attendre encore " + aff + " jours")
                        }
                    } else {
                        let age = curr_year - (parseInt(year) + 1);
                        if (age >= 25) {
                            window.alert("Bienvenue");
                        } else {
                            let birthday = new Date((25 + parseInt(year)) + "-" + month + "-" + day + " " + curr_date.getHours() + ":" + curr_date.getMinutes() + ":" + (curr_date.getSeconds() + 1));
                            let diff = birthday - curr_date;
                            let aff = Math.floor(diff / (1000 * 3600 * 24));
                            window.alert("Il faut attendre encore " + aff + " jours")
                        }
                    }
                } else if (month == 2){
                    console.log('hello');
                    $a = year % 4;
                    $b = year % 100;
                    $c = year % 400;
                    if ($a == 0 && $b != 0 || $c == 0) {
                        if (day < 30) {
                            if (curr_day >= day && curr_month == month || curr_month > month) {
                                let age = curr_year - year;
                                if (age >= 25) {
                                    window.alert("Bienvenue");
                                } else {
                                    let birthday = new Date((25 + parseInt(year)) + "-" + month + "-" + day + " " + curr_date.getHours() + ":" + curr_date.getMinutes() + ":" + (curr_date.getSeconds() + 1));
                                    let diff = birthday - curr_date;
                                    let aff = Math.floor(diff / (1000 * 3600 * 24));
                                    window.alert("Il faut attendre encore " + aff + " jours")
                                }
                            } else {
                                let age = curr_year - (parseInt(year) + 1);
                                if (age >= 25) {
                                    window.alert("Bienvenue");
                                } else {
                                    let birthday = new Date((25 + parseInt(year)) + "-" + month + "-" + day + " " + curr_date.getHours() + ":" + curr_date.getMinutes() + ":" + (curr_date.getSeconds() + 1));
                                    let diff = birthday - curr_date;
                                    let aff = Math.floor(diff / (1000 * 3600 * 24));
                                    window.alert("Il faut attendre encore " + aff + " jours")
                                }
                            }
                        } else {
                            window.alert("Pas autant de jours en février !");
                        }
                    } else {
                        if (day < 29) {
                            if (curr_day >= day && curr_month == month || curr_month > month) {
                                let age = curr_year - year;
                                if (age >= 25) {
                                    window.alert("Bienvenue");
                                } else {
                                    let birthday = new Date((25 + parseInt(year)) + "-" + month + "-" + day + " " + curr_date.getHours() + ":" + curr_date.getMinutes() + ":" + (curr_date.getSeconds() + 1));
                                    let diff = birthday - curr_date;
                                    let aff = Math.floor(diff / (1000 * 3600 * 24));
                                    window.alert("Il faut attendre encore " + aff + " jours")
                                }
                            } else {
                                let age = curr_year - (parseInt(year) + 1);
                                if (age >= 25) {
                                    window.alert("Bienvenue");
                                } else {
                                    let birthday = new Date((25 + parseInt(year)) + "-" + month + "-" + day + " " + curr_date.getHours() + ":" + curr_date.getMinutes() + ":" + (curr_date.getSeconds() + 1));
                                    let diff = birthday - curr_date;
                                    let aff = Math.floor(diff / (1000 * 3600 * 24));
                                    window.alert("Il faut attendre encore " + aff + " jours")
                                }
                            }
                        } else {
                            window.alert("Pas autant de jours en février !");
                        }
                    }
                }


            }

        }
    } else {
        window.alert("Ce ne sont pas des nombres !");
    }
};

document.querySelector('button').addEventListener('click', function () {
    const birthday = window.prompt("Veuillez donner votre date de naissance sous le format dd/mm/yyyy svp :").split("/");
    verify_date(birthday);
});