"use strict";
const app = require('./express/server');
const Request = require('request');
const cheerio = require('cheerio');
const mongoose = require('fs');
const express = require ('express');
const app = express();
const port = 3000;
var arrObj = new Array();
const URL = 'https://www.worldometers.info/coronavirus/';


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.get('/0', (req, res ) => {
res.send(arrObj);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var getData =setTimeout(() => {
 Request(URL, function (err, res, body) {
    if (err) {
        console.log("error");
    }
    else {
                let $ = cheerio.load(body);
        var country,total_case, new_case, total_death, total_recover,new_death,active_case , serious_critial;
        $('div.tab-content > div#nav-today> div.main_table_countries_div > table#main_table_countries_today > tbody > tr').each(function (index) {

            $(this).find('td').each(function (indexi) {
                switch (indexi) {
                    case 0:
                         country = $(this).find('a').text();
                        if (country === "")
                            country = $(this).text();
                        break;
                    case 1:
                         total_case = $(this).text();
                        break;
                    case 2:
                         new_case = $(this).text();
                        break;
                    case 3:
                         total_death = $(this).text();
                        break;
                    case 4:
                         new_death = $(this).text();
                        break;
                    case 5:
                         total_recover = $(this).text();
                        break;
                    case 6:
                         active_case = $(this).text();
                        ;
                    case 7: 
                         serious_critial = $(this).text();
                        break;

                }
            });
                var Corona_obj = {
                    country : country,
                    total_case : total_case,
                    new_case : new_case,
                    total_death : total_death,
                    new_death : new_death,
                    total_recover : total_recover,
                    active_case : active_case,
                    serious_critial : serious_critial
                };
                arrObj.push(Corona_obj);
        });


                console.log(arrObj.toString());

    }

});

        }, 100);
