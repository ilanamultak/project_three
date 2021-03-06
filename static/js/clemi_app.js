
var news_list="/news";
var crime_2014="/crime2014";
var crime_2015="/crime2015";
var crime_2016="/crime2016";
var crime_2017="/crime2017";
var crime_2018="/crime2018";



d3.json(crime_2014).then(function(c14){
    d3.json(crime_2015).then(function(c15){
        d3.json(crime_2016).then(function(c16){
            d3.json(crime_2017).then(function(c17){
                d3.json(crime_2018).then(function(c18){


                    //console.log(c14);
                    //console.log(c18);
                    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    ////////////           Creating new object with just date and offense type         ///////////////////////////
                    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

                    // function to create new object
                    function omit(obj, props) {
                    props = props instanceof Array ? props : [props]
                    return eval(`(({${props.join(',')}, ...o}) => o)(obj)`)
                    }
                
                    /////////////////// S E L E C T    C O L U M N S   O F    I N T E R E ST //////////////////
                    ///////////////////                  2014                ////////////////
                
                    offense_by_time_14=[];

                    for (var i = 0; i < c14.length; i++){
                        //console.log(c14[i])
                        const obj=c14[i]
                        const offense_time_14 = omit(obj, ['ANC', 'BID','BLOCK','BLOCK_GROUP','CCN','CENSUS_TRACT','DISTRICT',
                                                    'END_DATE','LATITUDE','LONGITUDE','METHOD','NEIGHBORHOOD_CLUSTER','OBJECTID',
                                                    'OCTO_RECORD_ID','PSA','SHIFT','START_DATE','VOTING_PRECINCT','WARD','X','Y',
                                                    'YBLOCK','XBLOCK'])
                        //console.log(offense_time)
                        offense_by_time_14.push(offense_time_14)
                    }
                    //console.log("OFFENSE AND DATE KEY VALUE PAIRS")
                    //console.log(offense_by_time)

                    ////////////////////////                2015                      ///////////////////////////
                    offense_by_time_15=[];
                    
                    for (var i = 0; i < c15.length; i++){
                            const obj=c15[i]
                            const offense_time_15 = omit(obj, ['ANC', 'BID','BLOCK','BLOCK_GROUP','CCN','CENSUS_TRACT','DISTRICT',
                                                    'END_DATE','LATITUDE','LONGITUDE','METHOD','NEIGHBORHOOD_CLUSTER','OBJECTID',
                                                    'OCTO_RECORD_ID','PSA','SHIFT','START_DATE','VOTING_PRECINCT','WARD','X','Y',
                                                    'YBLOCK','XBLOCK'])
                            offense_by_time_15.push(offense_time_15)
                    }

                    //////////////////////                 2016                     //////////////////////////////
                    offense_by_time_16=[];
                    
                    for (var i = 0; i < c16.length; i++){
                            const obj=c16[i]
                            const offense_time_16 = omit(obj, ['ANC', 'BID','BLOCK','BLOCK_GROUP','CCN','CENSUS_TRACT','DISTRICT',
                                                    'END_DATE','LATITUDE','LONGITUDE','METHOD','NEIGHBORHOOD_CLUSTER','OBJECTID',
                                                    'OCTO_RECORD_ID','PSA','SHIFT','START_DATE','VOTING_PRECINCT','WARD','X','Y',
                                                    'YBLOCK','XBLOCK'])
                            offense_by_time_16.push(offense_time_16)
                    }

                    //////////////////////                 2017                     //////////////////////////////
                    offense_by_time_17=[];
                    
                    for (var i = 0; i < c17.length; i++){
                            const obj=c17[i]
                            const offense_time_17 = omit(obj, ['ANC', 'BID','BLOCK','BLOCK_GROUP','CCN','CENSUS_TRACT','DISTRICT',
                                                    'END_DATE','LATITUDE','LONGITUDE','METHOD','NEIGHBORHOOD_CLUSTER','OBJECTID',
                                                    'OCTO_RECORD_ID','PSA','SHIFT','START_DATE','VOTING_PRECINCT','WARD','X','Y',
                                                    'YBLOCK','XBLOCK'])
                            offense_by_time_17.push(offense_time_17)
                    }

                    ///////////////////////                 2018                     //////////////////////////////
                    offense_by_time_18=[];
                    
                    for (var i = 0; i < c18.length; i++){
                            const obj=c18[i]
                            const offense_time_18 = omit(obj, ['ANC', 'BID','BLOCK','BLOCK_GROUP','CCN','CENSUS_TRACT','DISTRICT',
                                                    'END_DATE','LATITUDE','LONGITUDE','METHOD','NEIGHBORHOOD_CLUSTER','OBJECTID',
                                                    'OCTO_RECORD_ID','PSA','SHIFT','START_DATE','VOTING_PRECINCT','WARD','X','Y',
                                                    'YBLOCK','XBLOCK'])
                            offense_by_time_18.push(offense_time_18)
                    }
        


                    /////// Test Code for pulling out hour of the day
                    //console.log("Testing hour slice")
                    var test=offense_by_time_14[6]
                    //console.log(test)
                    var date=test.REPORT_DAT
                    //console.log(date)
                    var res = date.slice(11,13);
                    //console.log(res)
                    test.HOUR = res;
                    //console.log(test)
                
                
                    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    //////////////////////////          Pull out hour of the day for entire object         /////////////////////////////
                    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                    /////////////////////////////////////////////   2  0  1   4     //////////////////////////////////////
                    var hourly_data_14=[]
                    for (var i = 0; i < offense_by_time_14.length; i++){
                        t=offense_by_time_14[i].REPORT_DAT
                        //console.log(t)
                        var hour_14 = t.slice(11,13);
                        //console.log(hour)
                        offense_by_time_14[i].HOUR = hour_14;
                        //console.log(offense_by_time[i])
                        hourly_data_14.push(offense_by_time_14[i])

                    }

                    //console.log(hourly_data_14)

                    //////////////////////////////////////////    2  0  1  5    /////////////////////////////////////////////////////////
                    var hourly_data_15=[]
                    for (var i = 0; i < offense_by_time_15.length; i++){
                        t=offense_by_time_15[i].REPORT_DAT
                        //console.log(t)
                        var hour_15 = t.slice(11,13);
                        //console.log(hour)
                        offense_by_time_15[i].HOUR = hour_15;
                        //console.log(offense_by_time[i])
                        hourly_data_15.push(offense_by_time_15[i])

                    }

                    ////////////////////////////////////////    2   0   1   6    ///////////////////////////////////////////////////////
                    var hourly_data_16=[]
                    for (var i = 0; i < offense_by_time_16.length; i++){
                        t=offense_by_time_16[i].REPORT_DAT
                        //console.log(t)
                        var hour_16 = t.slice(11,13);
                        //console.log(hour)
                        offense_by_time_16[i].HOUR = hour_16;
                        //console.log(offense_by_time[i])
                        hourly_data_16.push(offense_by_time_16[i])

                    }

                    ///////////////////////////////////////////    2   0   1   7    //////////////////////////////////////////////////////// 
                    var hourly_data_17=[]
                    for (var i = 0; i < offense_by_time_17.length; i++){
                        t=offense_by_time_17[i].REPORT_DAT
                        //console.log(t)
                        var hour_17 = t.slice(11,13);
                        //console.log(hour)
                        offense_by_time_17[i].HOUR = hour_17;
                        //console.log(offense_by_time[i])
                        hourly_data_17.push(offense_by_time_17[i])

                    }

                    ////////////////////////////////////////      2    0    1   8    ////////////////////////////////////////////////////////
                    var hourly_data_18=[]
                    for (var i = 0; i < offense_by_time_18.length; i++){
                        t=offense_by_time_18[i].REPORT_DAT
                        //console.log(t)
                        var hour_18 = t.slice(11,13);
                        //console.log(hour)
                        offense_by_time_18[i].HOUR = hour_18;
                        //console.log(offense_by_time[i])
                        hourly_data_18.push(offense_by_time_18[i])

                    }


                    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    ////////////// A  P  P L  Y  I  N  G      O  F  F  E  N  S  E     F  I  L  T  E  R  S   ///////////////////////////////////
                    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                    //////////////////////////////////////////      2   0   1   4   ///////////////////////////////////////////////////////////
                    var arson_14=hourly_data_14.filter(c=>c.OFFENSE=='ARSON')
                    var assault_weapon_14=hourly_data_14.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON')
                    var burglary_14=hourly_data_14.filter(c=>c.OFFENSE=='BURGLARY')
                    var homicide_14=hourly_data_14.filter(c=>c.OFFENSE=='HOMICIDE')
                    var vehicle_theft_14=hourly_data_14.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT')
                    var robbery_14=hourly_data_14.filter(c=>c.OFFENSE=='ROBBERY')
                    var sex_abuse_14=hourly_data_14.filter(c=>c.OFFENSE=='SEX ABUSE')
                    var auto_theft_14=hourly_data_14.filter(c=>c.OFFENSE=='THEFT F/AUTO')
                    var theft_other_14=hourly_data_14.filter(c=>c.OFFENSE=='THEFT/OTHER')


                    //////////////////////////////////////////   2   0   1   5   ///////////////////////////////////////////////////////////
                    var arson_15=hourly_data_15.filter(c=>c.OFFENSE=='ARSON')
                    var assault_weapon_15=hourly_data_15.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON')
                    var burglary_15=hourly_data_15.filter(c=>c.OFFENSE=='BURGLARY')
                    var homicide_15=hourly_data_15.filter(c=>c.OFFENSE=='HOMICIDE')
                    var vehicle_theft_15=hourly_data_15.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT')
                    var robbery_15=hourly_data_15.filter(c=>c.OFFENSE=='ROBBERY')
                    var sex_abuse_15=hourly_data_15.filter(c=>c.OFFENSE=='SEX ABUSE')
                    var auto_theft_15=hourly_data_15.filter(c=>c.OFFENSE=='THEFT F/AUTO')
                    var theft_other_15=hourly_data_15.filter(c=>c.OFFENSE=='THEFT/OTHER')

                    
                    //////////////////////////////////////   2   0   1   6   ////////////////////////////////////////////////////////////////
                    var arson_16=hourly_data_16.filter(c=>c.OFFENSE=='ARSON')
                    var assault_weapon_16=hourly_data_16.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON')
                    var burglary_16=hourly_data_16.filter(c=>c.OFFENSE=='BURGLARY')
                    var homicide_16=hourly_data_16.filter(c=>c.OFFENSE=='HOMICIDE')
                    var vehicle_theft_16=hourly_data_16.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT')
                    var robbery_16=hourly_data_16.filter(c=>c.OFFENSE=='ROBBERY')
                    var sex_abuse_16=hourly_data_16.filter(c=>c.OFFENSE=='SEX ABUSE')
                    var auto_theft_16=hourly_data_16.filter(c=>c.OFFENSE=='THEFT F/AUTO')
                    var theft_other_16=hourly_data_16.filter(c=>c.OFFENSE=='THEFT/OTHER')


                    //////////////////////////////////////   2   0   1   7   ////////////////////////////////////////////////////////////////
                    var arson_17=hourly_data_17.filter(c=>c.OFFENSE=='ARSON')
                    var assault_weapon_17=hourly_data_17.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON')
                    var burglary_17=hourly_data_17.filter(c=>c.OFFENSE=='BURGLARY')
                    var homicide_17=hourly_data_17.filter(c=>c.OFFENSE=='HOMICIDE')
                    var vehicle_theft_17=hourly_data_17.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT')
                    var robbery_17=hourly_data_17.filter(c=>c.OFFENSE=='ROBBERY')
                    var sex_abuse_17=hourly_data_17.filter(c=>c.OFFENSE=='SEX ABUSE')
                    var auto_theft_17=hourly_data_17.filter(c=>c.OFFENSE=='THEFT F/AUTO')
                    var theft_other_17=hourly_data_17.filter(c=>c.OFFENSE=='THEFT/OTHER')


                    //////////////////////////////////////   2   0   1   8   ////////////////////////////////////////////////////////////////
                    var arson_18=hourly_data_18.filter(c=>c.OFFENSE=='ARSON')
                    var assault_weapon_18=hourly_data_18.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON')
                    var burglary_18=hourly_data_18.filter(c=>c.OFFENSE=='BURGLARY')
                    var homicide_18=hourly_data_18.filter(c=>c.OFFENSE=='HOMICIDE')
                    var vehicle_theft_18=hourly_data_18.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT')
                    var robbery_18=hourly_data_18.filter(c=>c.OFFENSE=='ROBBERY')
                    var sex_abuse_18=hourly_data_18.filter(c=>c.OFFENSE=='SEX ABUSE')
                    var auto_theft_18=hourly_data_18.filter(c=>c.OFFENSE=='THEFT F/AUTO')
                    var theft_other_18=hourly_data_18.filter(c=>c.OFFENSE=='THEFT/OTHER')


                    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    ////////////////////////////////////////////  Counting offenses by hour ///////////////////////////////////////////////////

                    ////////////////////////////////////////////   2   0   1   4    ///////////////////////////////////////////////////////////
                    function sortObj(obj) {
                        return Object.keys(obj).sort().reduce(function (result, key) {
                          result[key] = obj[key];
                          return result;
                        }, {});
                    }
                     
                    
                    
                    ///\\\ ARSON by hour///\\\
                    var time_arson_14=arson_14.map(t=>t.HOUR)
                    var result_arson_14_unsorted = {};
                    for(var i = 0; i < time_arson_14.length; ++i) {
                        if(!result_arson_14_unsorted[time_arson_14[i]])
                        result_arson_14_unsorted[time_arson_14[i]] = 0;
                        ++result_arson_14_unsorted[time_arson_14[i]];
                    }
                    result_arson_14_unsorted["00"] = 0;
                    result_arson_14_unsorted["02"] = 0;
                    result_arson_14_unsorted["10"] = 0;
                    result_arson_14_unsorted["13"] = 0;
                    result_arson_14_unsorted["15"] = 0;
                    result_arson_14_unsorted["21"] = 0;
                    result_arson_14_unsorted["22"] = 0;
                    result_arson_14_unsorted["23"] = 0;
                  
                    //console.log(result_arson_14_unsorted)

                    const replace_time1_arson_14 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                                            '07':'7', '08':'8', '09':'9'
                                            };

                    let repItems_arson14t = Object.keys(result_arson_14_unsorted).map((key) => {
                        const newKey = replace_time1_arson_14[key] || key;
                        return { [newKey] : result_arson_14_unsorted[key] };
                        });
                    const result_arson_14_t = repItems_arson14t.reduce((a, b) => Object.assign({}, a, b));
                    
                    //console.log(result_arson_14_t)
                  
                    let result_arson_14_sorted = sortObj(result_arson_14_t);
                    //console.log("sorted")
                    //console.log(result_arson_14_sorted);


                    const reptime_arson14 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                            '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                            '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                            '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_arson14 = Object.keys(result_arson_14_sorted).map((key) => {
                    const newKey = reptime_arson14[key] || key;
                    return { [newKey] : result_arson_14_sorted[key] };
                    });
                    const result_arson_14 = repItems_arson14.reduce((a, b) => Object.assign({}, a, b));
                    //console.log("new");
                    //console.log(result_arson_14);



                    ///\\\ ASSAULT W/DANGEROUS WEAPON by hour///\\\
                    var time_assault_14=assault_weapon_14.map(t=>t.HOUR)
                    var result_assault_14_unsorted = {};
                    for(var i = 0; i < time_assault_14.length; ++i) {
                        if(!result_assault_14_unsorted[time_assault_14[i]])
                        result_assault_14_unsorted[time_assault_14[i]] = 0;
                        ++result_assault_14_unsorted[time_assault_14[i]];
                    }

                    const replace_time1_assault_14 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                                            '07':'7', '08':'8', '09':'9'
                                            };

                    let repItems_assault14t = Object.keys(result_assault_14_unsorted).map((key) => {
                        const newKey = replace_time1_assault_14[key] || key;
                        return { [newKey] : result_assault_14_unsorted[key] };
                        });
                    const result_assault_14_t = repItems_assault14t.reduce((a, b) => Object.assign({}, a, b));
                    
                    //console.log(result_assault_14_t)
                  
                    let result_assault_14_sorted = sortObj(result_assault_14_t);
                    //console.log("sorted")
                    //console.log(result_assault_14_sorted);


                    const reptime_assault14 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                            '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                            '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                            '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_assault14 = Object.keys(result_assault_14_sorted).map((key) => {
                    const newKey = reptime_assault14[key] || key;
                    return { [newKey] : result_assault_14_sorted[key] };
                    });
                    const result_assault_14 = repItems_assault14.reduce((a, b) => Object.assign({}, a, b));
                   


                    ///\\\ BURGLARY by hour///\\\
                    var time_burglary_14=burglary_14.map(t=>t.HOUR)
                    var result_burglary_14_unsorted = {};
                    for(var i = 0; i < time_burglary_14.length; ++i) {
                        if(!result_burglary_14_unsorted[time_burglary_14[i]])
                        result_burglary_14_unsorted[time_burglary_14[i]] = 0;
                        ++result_burglary_14_unsorted[time_burglary_14[i]];
                    }

                    const replace_time1_burglary_14 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                                            '07':'7', '08':'8', '09':'9'
                                            };

                    let repItems_burglary14t = Object.keys(result_burglary_14_unsorted).map((key) => {
                        const newKey = replace_time1_burglary_14[key] || key;
                        return { [newKey] : result_burglary_14_unsorted[key] };
                        });
                    const result_burglary_14_t = repItems_burglary14t.reduce((a, b) => Object.assign({}, a, b));
                    
                    //console.log(result_burglary_14_t)
                  
                    let result_burglary_14_sorted = sortObj(result_burglary_14_t);
                   ;


                    const reptime_burglary14 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                            '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                            '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                            '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_burglary14 = Object.keys(result_burglary_14_sorted).map((key) => {
                    const newKey = reptime_burglary14[key] || key;
                    return { [newKey] : result_burglary_14_sorted[key] };
                    });
                    const result_burglary_14 = repItems_burglary14.reduce((a, b) => Object.assign({}, a, b));
                


                    ///\\\ HOMICIDE by hour///\\\
                    var time_homicide_14=homicide_14.map(t=>t.HOUR)
                    var result_homicide_14_unsorted = {};
                    for(var i = 0; i < time_homicide_14.length; ++i) {
                        if(!result_homicide_14_unsorted[time_homicide_14[i]])
                        result_homicide_14_unsorted[time_homicide_14[i]] = 0;
                        ++result_homicide_14_unsorted[time_homicide_14[i]];
                    }
                    result_homicide_14_unsorted["01"] = 0; result_homicide_14_unsorted["02"] = 0; result_homicide_14_unsorted["03"] = 0;
                    result_homicide_14_unsorted["04"] = 0; result_homicide_14_unsorted["05"] = 0; result_homicide_14_unsorted["06"] = 0;
                    result_homicide_14_unsorted["07"] = 0; result_homicide_14_unsorted["08"] = 0; result_homicide_14_unsorted["09"] = 0;
                    result_homicide_14_unsorted["10"] = 0; result_homicide_14_unsorted["11"] = 0; result_homicide_14_unsorted["12"] = 0;
                    result_homicide_14_unsorted["13"] = 0; result_homicide_14_unsorted["14"] = 0; result_homicide_14_unsorted["15"] = 0;
                    result_homicide_14_unsorted["16"] = 0; result_homicide_14_unsorted["17"] = 0; result_homicide_14_unsorted["18"] = 0;
                    result_homicide_14_unsorted["19"] = 0; result_homicide_14_unsorted["20"] = 0; result_homicide_14_unsorted["21"] = 0;
                    result_homicide_14_unsorted["22"] = 0; result_homicide_14_unsorted["23"] = 0;


                    const replace_time1_homicide_14 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                                            '07':'7', '08':'8', '09':'9'
                                            };

                    let repItems_homicide14t = Object.keys(result_homicide_14_unsorted).map((key) => {
                        const newKey = replace_time1_homicide_14[key] || key;
                        return { [newKey] : result_homicide_14_unsorted[key] };
                        });
                    const result_homicide_14_t = repItems_homicide14t.reduce((a, b) => Object.assign({}, a, b));
                    
                    let result_homicide_14_sorted = sortObj(result_homicide_14_t);


                    const reptime_homicide14 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                            '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                            '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                            '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_homicide14 = Object.keys(result_homicide_14_sorted).map((key) => {
                    const newKey = reptime_homicide14[key] || key;
                    return { [newKey] : result_homicide_14_sorted[key] };
                    });
                    const result_homicide_14 = repItems_homicide14.reduce((a, b) => Object.assign({}, a, b));
                

                    ///\\\ MOTOR VEHICLE THEFT by hour///\\
                    var time_vehicle_theft_14=vehicle_theft_14.map(t=>t.HOUR)
                    var result_vehicle_theft_14_unsorted = {};
                    for(var i = 0; i < time_vehicle_theft_14.length; ++i) {
                        if(!result_vehicle_theft_14_unsorted[time_vehicle_theft_14[i]])
                        result_vehicle_theft_14_unsorted[time_vehicle_theft_14[i]] = 0;
                        ++result_vehicle_theft_14_unsorted[time_vehicle_theft_14[i]];
                    }

                    const replace_time1_vehicle_theft_14 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_vehicle_theft14t = Object.keys(result_vehicle_theft_14_unsorted).map((key) => {
                    const newKey = replace_time1_vehicle_theft_14[key] || key;
                    return { [newKey] : result_vehicle_theft_14_unsorted[key] };
                    });
                    const result_vehicle_theft_14_t = repItems_vehicle_theft14t.reduce((a, b) => Object.assign({}, a, b));

                    let result_vehicle_theft_14_sorted = sortObj(result_vehicle_theft_14_t);
                    ;


                    const reptime_vehicle_theft14 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_vehicle_theft14 = Object.keys(result_vehicle_theft_14_sorted).map((key) => {
                    const newKey = reptime_vehicle_theft14[key] || key;
                    return { [newKey] : result_vehicle_theft_14_sorted[key] };
                    });
                    const result_vehicle_theft_14 = repItems_vehicle_theft14.reduce((a, b) => Object.assign({}, a, b));



                    ///\\\ ROBBERY by hour///\\
                    var time_robbery_14=robbery_14.map(t=>t.HOUR)
                    var result_robbery_14_unsorted = {};
                    for(var i = 0; i < time_robbery_14.length; ++i) {
                        if(!result_robbery_14_unsorted[time_robbery_14[i]])
                        result_robbery_14_unsorted[time_robbery_14[i]] = 0;
                        ++result_robbery_14_unsorted[time_robbery_14[i]];
                    }


                    const replace_time1_robbery_14 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                                            '07':'7', '08':'8', '09':'9'
                                            };

                    let repItems_robbery14t = Object.keys(result_robbery_14_unsorted).map((key) => {
                        const newKey = replace_time1_robbery_14[key] || key;
                        return { [newKey] : result_robbery_14_unsorted[key] };
                        });
                    const result_robbery_14_t = repItems_robbery14t.reduce((a, b) => Object.assign({}, a, b));
                    
                    let result_robbery_14_sorted = sortObj(result_robbery_14_t);
            


                    const reptime_robbery14 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                            '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                            '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                            '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_robbery14 = Object.keys(result_robbery_14_sorted).map((key) => {
                    const newKey = reptime_robbery14[key] || key;
                    return { [newKey] : result_robbery_14_sorted[key] };
                    });
                    const result_robbery_14 = repItems_robbery14.reduce((a, b) => Object.assign({}, a, b));
                
                   

                    ///\\\ SEX ABUSE by hour///\\
                    var time_sex_abuse_14=sex_abuse_14.map(t=>t.HOUR)
                    var result_sex_abuse_14_unsorted = {};
                    for(var i = 0; i < time_sex_abuse_14.length; ++i) {
                        if(!result_sex_abuse_14_unsorted[time_sex_abuse_14[i]])
                        result_sex_abuse_14_unsorted[time_sex_abuse_14[i]] = 0;
                        ++result_sex_abuse_14_unsorted[time_sex_abuse_14[i]];
                    }

                    const replace_time1_sex_abuse_14 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_sex_abuse14t = Object.keys(result_sex_abuse_14_unsorted).map((key) => {
                    const newKey = replace_time1_sex_abuse_14[key] || key;
                    return { [newKey] : result_sex_abuse_14_unsorted[key] };
                    });
                    const result_sex_abuse_14_t = repItems_sex_abuse14t.reduce((a, b) => Object.assign({}, a, b));

                    let result_sex_abuse_14_sorted = sortObj(result_sex_abuse_14_t);



                    const reptime_sex_abuse14 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_sex_abuse14 = Object.keys(result_sex_abuse_14_sorted).map((key) => {
                    const newKey = reptime_sex_abuse14[key] || key;
                    return { [newKey] : result_sex_abuse_14_sorted[key] };
                    });
                    const result_sex_abuse_14 = repItems_sex_abuse14.reduce((a, b) => Object.assign({}, a, b));


                    ///\\\ THEFT F/AUTO by hour///\\
                    var time_auto_theft_14=auto_theft_14.map(t=>t.HOUR)
                    var result_auto_theft_14_unsorted = {};
                    for(var i = 0; i < time_auto_theft_14.length; ++i) {
                        if(!result_auto_theft_14_unsorted[time_auto_theft_14[i]])
                        result_auto_theft_14_unsorted[time_auto_theft_14[i]] = 0;
                        ++result_auto_theft_14_unsorted[time_auto_theft_14[i]];
                    }

                    const replace_time1_auto_theft_14 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_auto_theft14t = Object.keys(result_auto_theft_14_unsorted).map((key) => {
                    const newKey = replace_time1_auto_theft_14[key] || key;
                    return { [newKey] : result_auto_theft_14_unsorted[key] };
                    });
                    const result_auto_theft_14_t = repItems_auto_theft14t.reduce((a, b) => Object.assign({}, a, b));

                    let result_auto_theft_14_sorted = sortObj(result_auto_theft_14_t);



                    const reptime_auto_theft14 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_auto_theft14 = Object.keys(result_auto_theft_14_sorted).map((key) => {
                    const newKey = reptime_auto_theft14[key] || key;
                    return { [newKey] : result_auto_theft_14_sorted[key] };
                    });
                    const result_auto_theft_14 = repItems_auto_theft14.reduce((a, b) => Object.assign({}, a, b));
                    
                    ///\\\ THEFT OTHER by hour///\\
                    var time_theft_other_14=theft_other_14.map(t=>t.HOUR)
                    var result_theft_other_14_unsorted = {};
                    for(var i = 0; i < time_theft_other_14.length; ++i) {
                        if(!result_theft_other_14_unsorted[time_theft_other_14[i]])
                        result_theft_other_14_unsorted[time_theft_other_14[i]] = 0;
                        ++result_theft_other_14_unsorted[time_theft_other_14[i]];
                    }

                    const replace_time1_theft_other_14 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_theft_other14t = Object.keys(result_theft_other_14_unsorted).map((key) => {
                    const newKey = replace_time1_theft_other_14[key] || key;
                    return { [newKey] : result_theft_other_14_unsorted[key] };
                    });
                    const result_theft_other_14_t = repItems_theft_other14t.reduce((a, b) => Object.assign({}, a, b));

                    //console.log(result_assault_14_t)

                    let result_theft_other_14_sorted = sortObj(result_theft_other_14_t);
                    //console.log("sorted")
                    //console.log(result_assault_14_sorted);


                    const reptime_theft_other14 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_theft_other14 = Object.keys(result_theft_other_14_sorted).map((key) => {
                    const newKey = reptime_theft_other14[key] || key;
                    return { [newKey] : result_theft_other_14_sorted[key] };
                    });
                    const result_theft_other_14 = repItems_theft_other14.reduce((a, b) => Object.assign({}, a, b));
                   



                    
                    ////////////////////////////////////////////   2   0   1   5    ///////////////////////////////////////////////////////////
                    ///\\\ ARSON by hour///\\\
                    var time_arson_15=arson_15.map(t=>t.HOUR)
                    var result_arson_15_unsorted = {};
                    for(var i = 0; i < time_arson_15.length; ++i) {
                        if(!result_arson_15_unsorted[time_arson_15[i]])
                        result_arson_15_unsorted[time_arson_15[i]] = 0;
                        ++result_arson_15_unsorted[time_arson_15[i]];
                    }
                    result_arson_15_unsorted["23"] = 0;
                    result_arson_15_unsorted["01"] = 0;
                    result_arson_15_unsorted["02"] = 0;
                    result_arson_15_unsorted["04"] = 0;
                    result_arson_15_unsorted["08"] = 0;
                    result_arson_15_unsorted["09"] = 0;
                    result_arson_15_unsorted["11"] = 0;
                    result_arson_15_unsorted["13"] = 0;
                    result_arson_15_unsorted["15"] = 0;
                    result_arson_15_unsorted["16"] = 0;
                    result_arson_15_unsorted["17"] = 0;
                    result_arson_15_unsorted["18"] = 0;

                    const replace_time1_arson_15 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_arson15t = Object.keys(result_arson_15_unsorted).map((key) => {
                    const newKey = replace_time1_arson_15[key] || key;
                    return { [newKey] : result_arson_15_unsorted[key] };
                    });
                    const result_arson_15_t = repItems_arson15t.reduce((a, b) => Object.assign({}, a, b));

                    let result_arson_15_sorted = sortObj(result_arson_15_t);


                    const reptime_arson15 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_arson15 = Object.keys(result_arson_15_sorted).map((key) => {
                    const newKey = reptime_arson15[key] || key;
                    return { [newKey] : result_arson_15_sorted[key] };
                    });
                    const result_arson_15 = repItems_arson15.reduce((a, b) => Object.assign({}, a, b));



                    ///\\\ ASSAULT W/DANGEROUS WEAPON by hour///\\\
                    var time_assault_15=assault_weapon_15.map(t=>t.HOUR)
                    var result_assault_15_unsorted = {};
                    for(var i = 0; i < time_assault_15.length; ++i) {
                        if(!result_assault_15_unsorted[time_assault_15[i]])
                        result_assault_15_unsorted[time_assault_15[i]] = 0;
                        ++result_assault_15_unsorted[time_assault_15[i]];
                    }

                    const replace_time1_assault_15 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_assault15t = Object.keys(result_assault_15_unsorted).map((key) => {
                    const newKey = replace_time1_assault_15[key] || key;
                    return { [newKey] : result_assault_15_unsorted[key] };
                    });
                    const result_assault_15_t = repItems_assault15t.reduce((a, b) => Object.assign({}, a, b));

                    let result_assault_15_sorted = sortObj(result_assault_15_t);


                    const reptime_assault15 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_assault15 = Object.keys(result_assault_15_sorted).map((key) => {
                    const newKey = reptime_assault15[key] || key;
                    return { [newKey] : result_assault_15_sorted[key] };
                    });
                    const result_assault_15 = repItems_assault15.reduce((a, b) => Object.assign({}, a, b));
                   


                    ///\\\ BURGLARY by hour///\\\
                    var time_burglary_15=burglary_15.map(t=>t.HOUR)
                    var result_burglary_15_unsorted = {};
                    for(var i = 0; i < time_burglary_15.length; ++i) {
                        if(!result_burglary_15_unsorted[time_burglary_15[i]])
                        result_burglary_15_unsorted[time_burglary_15[i]] = 0;
                        ++result_burglary_15_unsorted[time_burglary_15[i]];
                    }

                    const replace_time1_burglary_15 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_burglary15t = Object.keys(result_burglary_15_unsorted).map((key) => {
                    const newKey = replace_time1_burglary_15[key] || key;
                    return { [newKey] : result_burglary_15_unsorted[key] };
                    });
                    const result_burglary_15_t = repItems_burglary15t.reduce((a, b) => Object.assign({}, a, b));


                    let result_burglary_15_sorted = sortObj(result_burglary_15_t);
                    ;


                    const reptime_burglary15 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_burglary15 = Object.keys(result_burglary_15_sorted).map((key) => {
                    const newKey = reptime_burglary15[key] || key;
                    return { [newKey] : result_burglary_15_sorted[key] };
                    });
                    const result_burglary_15 = repItems_burglary15.reduce((a, b) => Object.assign({}, a, b));


                    ///\\\ HOMICIDE by hour///\\\
                    var time_homicide_15=homicide_15.map(t=>t.HOUR)
                    var result_homicide_15_unsorted = {};
                    for(var i = 0; i < time_homicide_15.length; ++i) {
                        if(!result_homicide_15_unsorted[time_homicide_15[i]])
                        result_homicide_15_unsorted[time_homicide_15[i]] = 0;
                        ++result_homicide_15_unsorted[time_homicide_15[i]];
                    }

                    result_homicide_15_unsorted["01"] = 0; result_homicide_15_unsorted["02"] = 0; result_homicide_15_unsorted["03"] = 0;
                    result_homicide_15_unsorted["04"] = 0; result_homicide_15_unsorted["05"] = 0; result_homicide_15_unsorted["06"] = 0;
                    result_homicide_15_unsorted["07"] = 0; result_homicide_15_unsorted["08"] = 0; result_homicide_15_unsorted["09"] = 0;
                    result_homicide_15_unsorted["10"] = 0; result_homicide_15_unsorted["11"] = 0; result_homicide_15_unsorted["12"] = 0;
                    result_homicide_15_unsorted["13"] = 0; result_homicide_15_unsorted["14"] = 0; result_homicide_15_unsorted["15"] = 0;
                    result_homicide_15_unsorted["16"] = 0; result_homicide_15_unsorted["17"] = 0; result_homicide_15_unsorted["18"] = 0;
                    result_homicide_15_unsorted["19"] = 0; result_homicide_15_unsorted["20"] = 0; result_homicide_15_unsorted["21"] = 0;
                    result_homicide_15_unsorted["22"] = 0; result_homicide_15_unsorted["23"] = 0;

                    const replace_time1_homicide_15 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                                            '07':'7', '08':'8', '09':'9'
                                            };

                    let repItems_homicide15t = Object.keys(result_homicide_15_unsorted).map((key) => {
                        const newKey = replace_time1_homicide_15[key] || key;
                        return { [newKey] : result_homicide_15_unsorted[key] };
                        });
                    const result_homicide_15_t = repItems_homicide15t.reduce((a, b) => Object.assign({}, a, b));
                  
                    let result_homicide_15_sorted = sortObj(result_homicide_15_t);
                


                    const reptime_homicide15 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                            '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                            '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                            '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_homicide15 = Object.keys(result_homicide_15_sorted).map((key) => {
                    const newKey = reptime_homicide15[key] || key;
                    return { [newKey] : result_homicide_15_sorted[key] };
                    });
                    const result_homicide_15 = repItems_homicide15.reduce((a, b) => Object.assign({}, a, b));
                




                    ///\\\ MOTOR VEHICLE THEFT by hour///\\
                    var time_vehicle_theft_15=vehicle_theft_15.map(t=>t.HOUR)
                    var result_vehicle_theft_15_unsorted = {};
                    for(var i = 0; i < time_vehicle_theft_15.length; ++i) {
                        if(!result_vehicle_theft_15_unsorted[time_vehicle_theft_15[i]])
                        result_vehicle_theft_15_unsorted[time_vehicle_theft_15[i]] = 0;
                        ++result_vehicle_theft_15_unsorted[time_vehicle_theft_15[i]];
                    }

                    const replace_time1_vehicle_theft_15 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_vehicle_theft15t = Object.keys(result_vehicle_theft_15_unsorted).map((key) => {
                    const newKey = replace_time1_vehicle_theft_15[key] || key;
                    return { [newKey] : result_vehicle_theft_15_unsorted[key] };
                    });
                    const result_vehicle_theft_15_t = repItems_vehicle_theft15t.reduce((a, b) => Object.assign({}, a, b));

                    let result_vehicle_theft_15_sorted = sortObj(result_vehicle_theft_15_t);
                    ;


                    const reptime_vehicle_theft15 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_vehicle_theft15 = Object.keys(result_vehicle_theft_15_sorted).map((key) => {
                    const newKey = reptime_vehicle_theft15[key] || key;
                    return { [newKey] : result_vehicle_theft_15_sorted[key] };
                    });
                    const result_vehicle_theft_15 = repItems_vehicle_theft15.reduce((a, b) => Object.assign({}, a, b));



                    ///\\\ ROBBERY by hour///\\
                    var time_robbery_15=robbery_15.map(t=>t.HOUR)
                    var result_robbery_15_unsorted = {};
                    for(var i = 0; i < time_robbery_15.length; ++i) {
                        if(!result_robbery_15_unsorted[time_robbery_15[i]])
                        result_robbery_15_unsorted[time_robbery_15[i]] = 0;
                        ++result_robbery_15_unsorted[time_robbery_15[i]];
                    }

                    
                    const replace_time1_robbery_15 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                                            '07':'7', '08':'8', '09':'9'
                                            };

                    let repItems_robbery15t = Object.keys(result_robbery_15_unsorted).map((key) => {
                        const newKey = replace_time1_robbery_15[key] || key;
                        return { [newKey] : result_robbery_15_unsorted[key] };
                        });
                    const result_robbery_15_t = repItems_robbery15t.reduce((a, b) => Object.assign({}, a, b));
                    
                    let result_robbery_15_sorted = sortObj(result_robbery_15_t);
            


                    const reptime_robbery15 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                            '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                            '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                            '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_robbery15 = Object.keys(result_robbery_15_sorted).map((key) => {
                    const newKey = reptime_robbery15[key] || key;
                    return { [newKey] : result_robbery_15_sorted[key] };
                    });
                    const result_robbery_15 = repItems_robbery15.reduce((a, b) => Object.assign({}, a, b));

                    ///\\\ SEX ABUSE by hour///\\
                    var time_sex_abuse_15=sex_abuse_15.map(t=>t.HOUR)
                    var result_sex_abuse_15_unsorted = {};
                    for(var i = 0; i < time_sex_abuse_15.length; ++i) {
                        if(!result_sex_abuse_15_unsorted[time_sex_abuse_15[i]])
                        result_sex_abuse_15_unsorted[time_sex_abuse_15[i]] = 0;
                        ++result_sex_abuse_15_unsorted[time_sex_abuse_15[i]];
                    }

                    const replace_time1_sex_abuse_15 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_sex_abuse15t = Object.keys(result_sex_abuse_15_unsorted).map((key) => {
                    const newKey = replace_time1_sex_abuse_15[key] || key;
                    return { [newKey] : result_sex_abuse_15_unsorted[key] };
                    });
                    const result_sex_abuse_15_t = repItems_sex_abuse15t.reduce((a, b) => Object.assign({}, a, b));

                    let result_sex_abuse_15_sorted = sortObj(result_sex_abuse_15_t);



                    const reptime_sex_abuse15 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_sex_abuse15 = Object.keys(result_sex_abuse_15_sorted).map((key) => {
                    const newKey = reptime_sex_abuse15[key] || key;
                    return { [newKey] : result_sex_abuse_15_sorted[key] };
                    });
                    const result_sex_abuse_15 = repItems_sex_abuse15.reduce((a, b) => Object.assign({}, a, b));


                    
    
    

                    ///\\\ THEFT F/AUTO by hour///\\
                    var time_auto_theft_15=auto_theft_15.map(t=>t.HOUR)
                    var result_auto_theft_15_unsorted = {};
                    for(var i = 0; i < time_auto_theft_15.length; ++i) {
                        if(!result_auto_theft_15_unsorted[time_auto_theft_15[i]])
                        result_auto_theft_15_unsorted[time_auto_theft_15[i]] = 0;
                        ++result_auto_theft_15_unsorted[time_auto_theft_15[i]];
                    }
                    
                    const replace_time1_auto_theft_15 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_auto_theft15t = Object.keys(result_auto_theft_15_unsorted).map((key) => {
                    const newKey = replace_time1_auto_theft_15[key] || key;
                    return { [newKey] : result_auto_theft_15_unsorted[key] };
                    });
                    const result_auto_theft_15_t = repItems_auto_theft15t.reduce((a, b) => Object.assign({}, a, b));

                    let result_auto_theft_15_sorted = sortObj(result_auto_theft_15_t);



                    const reptime_auto_theft15 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_auto_theft15 = Object.keys(result_auto_theft_15_sorted).map((key) => {
                    const newKey = reptime_auto_theft15[key] || key;
                    return { [newKey] : result_auto_theft_15_sorted[key] };
                    });
                    const result_auto_theft_15 = repItems_auto_theft15.reduce((a, b) => Object.assign({}, a, b));

                    ///\\\ THEFT OTHER by hour///\\
                    var time_theft_other_15=theft_other_15.map(t=>t.HOUR)
                    var result_theft_other_15_unsorted = {};
                    for(var i = 0; i < time_theft_other_15.length; ++i) {
                        if(!result_theft_other_15_unsorted[time_theft_other_15[i]])
                        result_theft_other_15_unsorted[time_theft_other_15[i]] = 0;
                        ++result_theft_other_15_unsorted[time_theft_other_15[i]];
                    }

                    const replace_time1_theft_other_15 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_theft_other15t = Object.keys(result_theft_other_15_unsorted).map((key) => {
                    const newKey = replace_time1_theft_other_15[key] || key;
                    return { [newKey] : result_theft_other_15_unsorted[key] };
                    });
                    const result_theft_other_15_t = repItems_theft_other15t.reduce((a, b) => Object.assign({}, a, b));

                    let result_theft_other_15_sorted = sortObj(result_theft_other_15_t);


                    const reptime_theft_other15 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_theft_other15 = Object.keys(result_theft_other_15_sorted).map((key) => {
                    const newKey = reptime_theft_other15[key] || key;
                    return { [newKey] : result_theft_other_15_sorted[key] };
                    });
                    const result_theft_other_15 = repItems_theft_other15.reduce((a, b) => Object.assign({}, a, b));

                    ///////////////////////////////////////////////////    2   0   1   6   ///////////////////////////////////////////
                    ///\\\ ARSON by hour///\\\
                    var time_arson_16=arson_16.map(t=>t.HOUR)
                    var result_arson_16_unsorted = {};
                    for(var i = 0; i < time_arson_16.length; ++i) {
                        if(!result_arson_16_unsorted[time_arson_16[i]])
                        result_arson_16_unsorted[time_arson_16[i]] = 0;
                        ++result_arson_16_unsorted[time_arson_16[i]];
                    }
                    result_arson_16_unsorted["00"] = 0; result_arson_16_unsorted["01"] = 0; result_arson_16_unsorted["02"] = 0; 
                    result_arson_16_unsorted["03"] = 0; result_arson_16_unsorted["04"] = 0; result_arson_16_unsorted["05"] = 0; 
                    result_arson_16_unsorted["06"] = 0; result_arson_16_unsorted["07"] = 0; result_arson_16_unsorted["08"] = 0;
                    result_arson_16_unsorted["09"] = 0; result_arson_16_unsorted["11"] = 0; result_arson_16_unsorted["12"] = 0;
                    result_arson_16_unsorted["13"] = 0; result_arson_16_unsorted["15"] = 0; result_arson_16_unsorted["16"] = 0;
                    result_arson_16_unsorted["17"] = 0; result_arson_16_unsorted["20"] = 0; result_arson_16_unsorted["21"] = 0;
                    result_arson_16_unsorted["22"] = 0; result_arson_16_unsorted["23"] = 0;

                    const replace_time1_arson_16 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_arson16t = Object.keys(result_arson_16_unsorted).map((key) => {
                    const newKey = replace_time1_arson_16[key] || key;
                    return { [newKey] : result_arson_16_unsorted[key] };
                    });
                    const result_arson_16_t = repItems_arson16t.reduce((a, b) => Object.assign({}, a, b));

                    let result_arson_16_sorted = sortObj(result_arson_16_t);


                    const reptime_arson16 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_arson16 = Object.keys(result_arson_16_sorted).map((key) => {
                    const newKey = reptime_arson16[key] || key;
                    return { [newKey] : result_arson_16_sorted[key] };
                    });
                    const result_arson_16 = repItems_arson16.reduce((a, b) => Object.assign({}, a, b));


                    ///\\\ ASSAULT W/DANGEROUS WEAPON by hour///\\\
                    var time_assault_16=assault_weapon_16.map(t=>t.HOUR)
                    var result_assault_16_unsorted = {};
                    for(var i = 0; i < time_assault_16.length; ++i) {
                        if(!result_assault_16_unsorted[time_assault_16[i]])
                        result_assault_16_unsorted[time_assault_16[i]] = 0;
                        ++result_assault_16_unsorted[time_assault_16[i]];
                    }

                    const replace_time1_assault_16 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_assault16t = Object.keys(result_assault_16_unsorted).map((key) => {
                    const newKey = replace_time1_assault_16[key] || key;
                    return { [newKey] : result_assault_16_unsorted[key] };
                    });
                    const result_assault_16_t = repItems_assault16t.reduce((a, b) => Object.assign({}, a, b));

                    let result_assault_16_sorted = sortObj(result_assault_16_t);


                    const reptime_assault16 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};


                    let repItems_assault16 = Object.keys(result_assault_16_sorted).map((key) => {
                    const newKey = reptime_assault16[key] || key;
                    return { [newKey] : result_assault_16_sorted[key] };
                    });
                    const result_assault_16 = repItems_assault16.reduce((a, b) => Object.assign({}, a, b));


                    ///\\\ BURGLARY by hour///\\\
                    var time_burglary_16=burglary_16.map(t=>t.HOUR)
                    var result_burglary_16_unsorted = {};
                    for(var i = 0; i < time_burglary_16.length; ++i) {
                        if(!result_burglary_16_unsorted[time_burglary_16[i]])
                        result_burglary_16_unsorted[time_burglary_16[i]] = 0;
                        ++result_burglary_16_unsorted[time_burglary_16[i]];
                    }

                    const replace_time1_burglary_16 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_burglary16t = Object.keys(result_burglary_16_unsorted).map((key) => {
                    const newKey = replace_time1_burglary_16[key] || key;
                    return { [newKey] : result_burglary_16_unsorted[key] };
                    });
                    const result_burglary_16_t = repItems_burglary16t.reduce((a, b) => Object.assign({}, a, b));


                    let result_burglary_16_sorted = sortObj(result_burglary_16_t);
                    ;


                    const reptime_burglary16 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_burglary16 = Object.keys(result_burglary_16_sorted).map((key) => {
                    const newKey = reptime_burglary16[key] || key;
                    return { [newKey] : result_burglary_16_sorted[key] };
                    });
                    const result_burglary_16 = repItems_burglary16.reduce((a, b) => Object.assign({}, a, b));


                    ///\\\ HOMICIDE by hour///\\\
                    var time_homicide_16=homicide_16.map(t=>t.HOUR)
                    var result_homicide_16_unsorted = {};
                    for(var i = 0; i < time_homicide_16.length; ++i) {
                        if(!result_homicide_16_unsorted[time_homicide_16[i]])
                        result_homicide_16_unsorted[time_homicide_16[i]] = 0;
                        ++result_homicide_16_unsorted[time_homicide_16[i]];
                    }
                    
                    result_homicide_16_unsorted["01"] = 0; result_homicide_16_unsorted["02"] = 0; result_homicide_16_unsorted["03"] = 0;
                    result_homicide_16_unsorted["04"] = 0; result_homicide_16_unsorted["05"] = 0; result_homicide_16_unsorted["06"] = 0;
                    result_homicide_16_unsorted["07"] = 0; result_homicide_16_unsorted["08"] = 0; result_homicide_16_unsorted["09"] = 0;
                    result_homicide_16_unsorted["10"] = 0; result_homicide_16_unsorted["11"] = 0; result_homicide_16_unsorted["12"] = 0;
                    result_homicide_16_unsorted["13"] = 0; result_homicide_16_unsorted["14"] = 0; result_homicide_16_unsorted["15"] = 0;
                    result_homicide_16_unsorted["16"] = 0; result_homicide_16_unsorted["17"] = 0; result_homicide_16_unsorted["18"] = 0;
                    result_homicide_16_unsorted["19"] = 0; result_homicide_16_unsorted["20"] = 0; result_homicide_16_unsorted["21"] = 0;
                    result_homicide_16_unsorted["22"] = 0; result_homicide_16_unsorted["23"] = 0;
                  


                    const replace_time1_homicide_16 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                                            '07':'7', '08':'8', '09':'9'
                                            };

                    let repItems_homicide16t = Object.keys(result_homicide_16_unsorted).map((key) => {
                        const newKey = replace_time1_homicide_16[key] || key;
                        return { [newKey] : result_homicide_16_unsorted[key] };
                        });
                    const result_homicide_16_t = repItems_homicide16t.reduce((a, b) => Object.assign({}, a, b));
                    
                  
                    let result_homicide_16_sorted = sortObj(result_homicide_16_t);
                   ;


                    const reptime_homicide16 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                            '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                            '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                            '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_homicide16 = Object.keys(result_homicide_16_sorted).map((key) => {
                    const newKey = reptime_homicide16[key] || key;
                    return { [newKey] : result_homicide_16_sorted[key] };
                    });
                    const result_homicide_16 = repItems_homicide16.reduce((a, b) => Object.assign({}, a, b));
                


                    ///\\\ MOTOR VEHICLE THEFT by hour///\\
                    var time_vehicle_theft_16=vehicle_theft_16.map(t=>t.HOUR)
                    var result_vehicle_theft_16_unsorted = {};
                    for(var i = 0; i < time_vehicle_theft_16.length; ++i) {
                        if(!result_vehicle_theft_16_unsorted[time_vehicle_theft_16[i]])
                        result_vehicle_theft_16_unsorted[time_vehicle_theft_16[i]] = 0;
                        ++result_vehicle_theft_16_unsorted[time_vehicle_theft_16[i]];
                    }

                    const replace_time1_vehicle_theft_16 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_vehicle_theft16t = Object.keys(result_vehicle_theft_16_unsorted).map((key) => {
                    const newKey = replace_time1_vehicle_theft_16[key] || key;
                    return { [newKey] : result_vehicle_theft_16_unsorted[key] };
                    });
                    const result_vehicle_theft_16_t = repItems_vehicle_theft16t.reduce((a, b) => Object.assign({}, a, b));

                    let result_vehicle_theft_16_sorted = sortObj(result_vehicle_theft_16_t);
                    ;


                    const reptime_vehicle_theft16 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_vehicle_theft16 = Object.keys(result_vehicle_theft_16_sorted).map((key) => {
                    const newKey = reptime_vehicle_theft16[key] || key;
                    return { [newKey] : result_vehicle_theft_16_sorted[key] };
                    });
                    const result_vehicle_theft_16 = repItems_vehicle_theft16.reduce((a, b) => Object.assign({}, a, b));



                    ///\\\ ROBBERY by hour///\\
                    var time_robbery_16=robbery_16.map(t=>t.HOUR)
                    var result_robbery_16_unsorted = {};
                    for(var i = 0; i < time_robbery_16.length; ++i) {
                        if(!result_robbery_16_unsorted[time_robbery_16[i]])
                        result_robbery_16_unsorted[time_robbery_16[i]] = 0;
                        ++result_robbery_16_unsorted[time_robbery_16[i]];
                    }

                    
                    const replace_time1_robbery_16 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                                            '07':'7', '08':'8', '09':'9'
                                            };

                    let repItems_robbery16t = Object.keys(result_robbery_16_unsorted).map((key) => {
                        const newKey = replace_time1_robbery_16[key] || key;
                        return { [newKey] : result_robbery_16_unsorted[key] };
                        });
                    const result_robbery_16_t = repItems_robbery16t.reduce((a, b) => Object.assign({}, a, b));
                    
                    let result_robbery_16_sorted = sortObj(result_robbery_16_t);
            


                    const reptime_robbery16 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                            '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                            '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                            '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_robbery16 = Object.keys(result_robbery_16_sorted).map((key) => {
                    const newKey = reptime_robbery16[key] || key;
                    return { [newKey] : result_robbery_16_sorted[key] };
                    });
                    const result_robbery_16 = repItems_robbery16.reduce((a, b) => Object.assign({}, a, b));



                    ///\\\ SEX ABUSE by hour///\\
                    var time_sex_abuse_16=sex_abuse_16.map(t=>t.HOUR)
                    var result_sex_abuse_16_unsorted = {};
                    for(var i = 0; i < time_sex_abuse_16.length; ++i) {
                        if(!result_sex_abuse_16_unsorted[time_sex_abuse_16[i]])
                        result_sex_abuse_16_unsorted[time_sex_abuse_16[i]] = 0;
                        ++result_sex_abuse_16_unsorted[time_sex_abuse_16[i]];
                    }

                    const replace_time1_sex_abuse_16 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_sex_abuse16t = Object.keys(result_sex_abuse_16_unsorted).map((key) => {
                    const newKey = replace_time1_sex_abuse_16[key] || key;
                    return { [newKey] : result_sex_abuse_16_unsorted[key] };
                    });
                    const result_sex_abuse_16_t = repItems_sex_abuse16t.reduce((a, b) => Object.assign({}, a, b));

                    let result_sex_abuse_16_sorted = sortObj(result_sex_abuse_16_t);



                    const reptime_sex_abuse16 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_sex_abuse16 = Object.keys(result_sex_abuse_16_sorted).map((key) => {
                    const newKey = reptime_sex_abuse16[key] || key;
                    return { [newKey] : result_sex_abuse_16_sorted[key] };
                    });
                    const result_sex_abuse_16 = repItems_sex_abuse16.reduce((a, b) => Object.assign({}, a, b));

                    ///\\\ THEFT F/AUTO by hour///\\
                    var time_auto_theft_16=auto_theft_16.map(t=>t.HOUR)
                    var result_auto_theft_16_unsorted = {};
                    for(var i = 0; i < time_auto_theft_16.length; ++i) {
                        if(!result_auto_theft_16_unsorted[time_auto_theft_16[i]])
                        result_auto_theft_16_unsorted[time_auto_theft_16[i]] = 0;
                        ++result_auto_theft_16_unsorted[time_auto_theft_16[i]];
                    };

                    const replace_time1_auto_theft_16 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_auto_theft16t = Object.keys(result_auto_theft_16_unsorted).map((key) => {
                    const newKey = replace_time1_auto_theft_16[key] || key;
                    return { [newKey] : result_auto_theft_16_unsorted[key] };
                    });
                    const result_auto_theft_16_t = repItems_auto_theft16t.reduce((a, b) => Object.assign({}, a, b));

                    let result_auto_theft_16_sorted = sortObj(result_auto_theft_16_t);



                    const reptime_auto_theft16 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_auto_theft16 = Object.keys(result_auto_theft_16_sorted).map((key) => {
                    const newKey = reptime_auto_theft16[key] || key;
                    return { [newKey] : result_auto_theft_16_sorted[key] };
                    });
                    const result_auto_theft_16 = repItems_auto_theft16.reduce((a, b) => Object.assign({}, a, b));
                    
                    ///\\\ THEFT OTHER by hour///\\
                    var time_theft_other_16=theft_other_16.map(t=>t.HOUR)
                    var result_theft_other_16_unsorted = {};
                    for(var i = 0; i < time_theft_other_16.length; ++i) {
                        if(!result_theft_other_16_unsorted[time_theft_other_16[i]])
                        result_theft_other_16_unsorted[time_theft_other_16[i]] = 0;
                        ++result_theft_other_16_unsorted[time_theft_other_16[i]];
                    }

                    const replace_time1_theft_other_16 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_theft_other16t = Object.keys(result_theft_other_16_unsorted).map((key) => {
                    const newKey = replace_time1_theft_other_16[key] || key;
                    return { [newKey] : result_theft_other_16_unsorted[key] };
                    });
                    const result_theft_other_16_t = repItems_theft_other16t.reduce((a, b) => Object.assign({}, a, b));

                    let result_theft_other_16_sorted = sortObj(result_theft_other_16_t);


                    const reptime_theft_other16 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_theft_other16 = Object.keys(result_theft_other_16_sorted).map((key) => {
                    const newKey = reptime_theft_other16[key] || key;
                    return { [newKey] : result_theft_other_16_sorted[key] };
                    });
                    const result_theft_other_16 = repItems_theft_other16.reduce((a, b) => Object.assign({}, a, b));


                    //////////////////////////////////////////   2   0   1   7   ///////////////////////////////////////////////
                    ///\\\ ARSON by hour///\\\
                    var time_arson_17=arson_17.map(t=>t.HOUR)
                    var result_arson_17_unsorted = {};
                    for(var i = 0; i < time_arson_17.length; ++i) {
                        if(!result_arson_17_unsorted[time_arson_17[i]])
                        result_arson_17_unsorted[time_arson_17[i]] = 0;
                        ++result_arson_17_unsorted[time_arson_17[i]];
                    }

                    result_arson_17_unsorted["00"] = 0; result_arson_17_unsorted["01"] = 0; result_arson_17_unsorted["03"] = 0; 
                    result_arson_17_unsorted["04"] = 0; result_arson_17_unsorted["05"] = 0; result_arson_17_unsorted["06"] = 0;
                    result_arson_17_unsorted["08"] = 0; result_arson_17_unsorted["09"] = 0; result_arson_17_unsorted["10"] = 0; 
                    result_arson_17_unsorted["12"] = 0; result_arson_17_unsorted["13"] = 0; result_arson_17_unsorted["14"] = 0;
                    result_arson_17_unsorted["17"] = 0; result_arson_17_unsorted["18"] = 0; result_arson_17_unsorted["19"] = 0;
                    result_arson_17_unsorted["20"] = 0; result_arson_17_unsorted["21"] = 0; result_arson_17_unsorted["22"] = 0;
                    result_arson_17_unsorted["23"] = 0;

                    const replace_time1_arson_17 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_arson17t = Object.keys(result_arson_17_unsorted).map((key) => {
                    const newKey = replace_time1_arson_17[key] || key;
                    return { [newKey] : result_arson_17_unsorted[key] };
                    });
                    const result_arson_17_t = repItems_arson17t.reduce((a, b) => Object.assign({}, a, b));

                    let result_arson_17_sorted = sortObj(result_arson_17_t);


                    const reptime_arson17 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_arson17 = Object.keys(result_arson_17_sorted).map((key) => {
                    const newKey = reptime_arson17[key] || key;
                    return { [newKey] : result_arson_17_sorted[key] };
                    });
                    const result_arson_17 = repItems_arson17.reduce((a, b) => Object.assign({}, a, b));

      
                    ///\\\ ASSAULT W/DANGEROUS WEAPON by hour///\\\
                    var time_assault_17=assault_weapon_17.map(t=>t.HOUR)
                    var result_assault_17_unsorted = {};
                    for(var i = 0; i < time_assault_17.length; ++i) {
                        if(!result_assault_17_unsorted[time_assault_17[i]])
                        result_assault_17_unsorted[time_assault_17[i]] = 0;
                        ++result_assault_17_unsorted[time_assault_17[i]];
                    }

                    const replace_time1_assault_17 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_assault17t = Object.keys(result_assault_17_unsorted).map((key) => {
                    const newKey = replace_time1_assault_17[key] || key;
                    return { [newKey] : result_assault_17_unsorted[key] };
                    });
                    const result_assault_17_t = repItems_assault17t.reduce((a, b) => Object.assign({}, a, b));

                    let result_assault_17_sorted = sortObj(result_assault_17_t);


                    const reptime_assault17 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};


                    let repItems_assault17 = Object.keys(result_assault_17_sorted).map((key) => {
                    const newKey = reptime_assault17[key] || key;
                    return { [newKey] : result_assault_17_sorted[key] };
                    });
                    const result_assault_17 = repItems_assault17.reduce((a, b) => Object.assign({}, a, b));
      
                    ///\\\ BURGLARY by hour///\\\
                    var time_burglary_17=burglary_17.map(t=>t.HOUR)
                    var result_burglary_17_unsorted = {};
                    for(var i = 0; i < time_burglary_17.length; ++i) {
                        if(!result_burglary_17_unsorted[time_burglary_17[i]])
                        result_burglary_17_unsorted[time_burglary_17[i]] = 0;
                        ++result_burglary_17_unsorted[time_burglary_17[i]];
                    }
                    
                    const replace_time1_burglary_17 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_burglary17t = Object.keys(result_burglary_17_unsorted).map((key) => {
                    const newKey = replace_time1_burglary_17[key] || key;
                    return { [newKey] : result_burglary_17_unsorted[key] };
                    });
                    const result_burglary_17_t = repItems_burglary17t.reduce((a, b) => Object.assign({}, a, b));


                    let result_burglary_17_sorted = sortObj(result_burglary_17_t);
                    ;


                    const reptime_burglary17 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_burglary17 = Object.keys(result_burglary_17_sorted).map((key) => {
                    const newKey = reptime_burglary17[key] || key;
                    return { [newKey] : result_burglary_17_sorted[key] };
                    });
                    const result_burglary_17 = repItems_burglary17.reduce((a, b) => Object.assign({}, a, b));




                    ///\\\ HOMICIDE by hour///\\\
                    var time_homicide_17=homicide_17.map(t=>t.HOUR)
                    var result_homicide_17_unsorted = {};
                    for(var i = 0; i < time_homicide_17.length; ++i) {
                        if(!result_homicide_17_unsorted[time_homicide_17[i]])
                        result_homicide_17_unsorted[time_homicide_17[i]] = 0;
                        ++result_homicide_17_unsorted[time_homicide_17[i]];
                    }
                    

                    result_homicide_17_unsorted["01"] = 0; result_homicide_17_unsorted["02"] = 0; result_homicide_17_unsorted["03"] = 0;
                    result_homicide_17_unsorted["04"] = 0; result_homicide_17_unsorted["05"] = 0; result_homicide_17_unsorted["06"] = 0;
                    result_homicide_17_unsorted["07"] = 0; result_homicide_17_unsorted["08"] = 0; result_homicide_17_unsorted["09"] = 0;
                    result_homicide_17_unsorted["10"] = 0; result_homicide_17_unsorted["11"] = 0; result_homicide_17_unsorted["12"] = 0;
                    result_homicide_17_unsorted["13"] = 0; result_homicide_17_unsorted["14"] = 0; result_homicide_17_unsorted["15"] = 0;
                    result_homicide_17_unsorted["16"] = 0; result_homicide_17_unsorted["17"] = 0; result_homicide_17_unsorted["18"] = 0;
                    result_homicide_17_unsorted["19"] = 0; result_homicide_17_unsorted["20"] = 0; result_homicide_17_unsorted["21"] = 0;
                    result_homicide_17_unsorted["22"] = 0; result_homicide_17_unsorted["23"] = 0;


                    const replace_time1_homicide_17 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                                            '07':'7', '08':'8', '09':'9'
                                            };

                    let repItems_homicide17t = Object.keys(result_homicide_17_unsorted).map((key) => {
                        const newKey = replace_time1_homicide_17[key] || key;
                        return { [newKey] : result_homicide_17_unsorted[key] };
                        });
                    const result_homicide_17_t = repItems_homicide17t.reduce((a, b) => Object.assign({}, a, b));
                  
                    let result_homicide_17_sorted = sortObj(result_homicide_17_t);
                   ;


                    const reptime_homicide17 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                            '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                            '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                            '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_homicide17 = Object.keys(result_homicide_17_sorted).map((key) => {
                    const newKey = reptime_homicide17[key] || key;
                    return { [newKey] : result_homicide_17_sorted[key] };
                    });
                    const result_homicide_17 = repItems_homicide17.reduce((a, b) => Object.assign({}, a, b));
                

      
                    ///\\\ MOTOR VEHICLE THEFT by hour///\\
                    var time_vehicle_theft_17=vehicle_theft_17.map(t=>t.HOUR)
                    var result_vehicle_theft_17_unsorted = {};
                    for(var i = 0; i < time_vehicle_theft_17.length; ++i) {
                        if(!result_vehicle_theft_17_unsorted[time_vehicle_theft_17[i]])
                        result_vehicle_theft_17_unsorted[time_vehicle_theft_17[i]] = 0;
                        ++result_vehicle_theft_17_unsorted[time_vehicle_theft_17[i]];
                    }

                    const replace_time1_vehicle_theft_17 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_vehicle_theft17t = Object.keys(result_vehicle_theft_17_unsorted).map((key) => {
                    const newKey = replace_time1_vehicle_theft_17[key] || key;
                    return { [newKey] : result_vehicle_theft_17_unsorted[key] };
                    });
                    const result_vehicle_theft_17_t = repItems_vehicle_theft17t.reduce((a, b) => Object.assign({}, a, b));

                    let result_vehicle_theft_17_sorted = sortObj(result_vehicle_theft_17_t);
                    ;


                    const reptime_vehicle_theft17 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_vehicle_theft17 = Object.keys(result_vehicle_theft_17_sorted).map((key) => {
                    const newKey = reptime_vehicle_theft17[key] || key;
                    return { [newKey] : result_vehicle_theft_17_sorted[key] };
                    });
                    const result_vehicle_theft_17 = repItems_vehicle_theft17.reduce((a, b) => Object.assign({}, a, b));


      
                    ///\\\ ROBBERY by hour///\\
                    var time_robbery_17=robbery_17.map(t=>t.HOUR)
                    var result_robbery_17_unsorted = {};
                    for(var i = 0; i < time_robbery_17.length; ++i) {
                        if(!result_robbery_17_unsorted[time_robbery_17[i]])
                        result_robbery_17_unsorted[time_robbery_17[i]] = 0;
                        ++result_robbery_17_unsorted[time_robbery_17[i]];
                    }
      
                    
                    const replace_time1_robbery_17 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                                            '07':'7', '08':'8', '09':'9'
                                            };

                    let repItems_robbery17t = Object.keys(result_robbery_17_unsorted).map((key) => {
                        const newKey = replace_time1_robbery_17[key] || key;
                        return { [newKey] : result_robbery_17_unsorted[key] };
                        });
                    const result_robbery_17_t = repItems_robbery17t.reduce((a, b) => Object.assign({}, a, b));
                    
                    let result_robbery_17_sorted = sortObj(result_robbery_17_t);
            


                    const reptime_robbery17 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                            '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                            '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                            '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_robbery17 = Object.keys(result_robbery_17_sorted).map((key) => {
                    const newKey = reptime_robbery17[key] || key;
                    return { [newKey] : result_robbery_17_sorted[key] };
                    });
                    const result_robbery_17 = repItems_robbery17.reduce((a, b) => Object.assign({}, a, b));



                    ///\\\ SEX ABUSE by hour///\\
                    var time_sex_abuse_17=sex_abuse_17.map(t=>t.HOUR)
                    var result_sex_abuse_17_unsorted = {};
                    for(var i = 0; i < time_sex_abuse_17.length; ++i) {
                        if(!result_sex_abuse_17_unsorted[time_sex_abuse_17[i]])
                        result_sex_abuse_17_unsorted[time_sex_abuse_17[i]] = 0;
                        ++result_sex_abuse_17_unsorted[time_sex_abuse_17[i]];
                    }

                    const replace_time1_sex_abuse_17 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_sex_abuse17t = Object.keys(result_sex_abuse_17_unsorted).map((key) => {
                    const newKey = replace_time1_sex_abuse_17[key] || key;
                    return { [newKey] : result_sex_abuse_17_unsorted[key] };
                    });
                    const result_sex_abuse_17_t = repItems_sex_abuse17t.reduce((a, b) => Object.assign({}, a, b));

                    let result_sex_abuse_17_sorted = sortObj(result_sex_abuse_17_t);



                    const reptime_sex_abuse17 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_sex_abuse17 = Object.keys(result_sex_abuse_17_sorted).map((key) => {
                    const newKey = reptime_sex_abuse17[key] || key;
                    return { [newKey] : result_sex_abuse_17_sorted[key] };
                    });
                    const result_sex_abuse_17 = repItems_sex_abuse17.reduce((a, b) => Object.assign({}, a, b));
      
                    ///\\\ THEFT F/AUTO by hour///\\
                    var time_auto_theft_17=auto_theft_17.map(t=>t.HOUR)
                    var result_auto_theft_17_unsorted = {};
                    for(var i = 0; i < time_auto_theft_17.length; ++i) {
                        if(!result_auto_theft_17_unsorted[time_auto_theft_17[i]])
                        result_auto_theft_17_unsorted[time_auto_theft_17[i]] = 0;
                        ++result_auto_theft_17_unsorted[time_auto_theft_17[i]];
                    }
                         
                    const replace_time1_auto_theft_17 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_auto_theft17t = Object.keys(result_auto_theft_17_unsorted).map((key) => {
                    const newKey = replace_time1_auto_theft_17[key] || key;
                    return { [newKey] : result_auto_theft_17_unsorted[key] };
                    });
                    const result_auto_theft_17_t = repItems_auto_theft17t.reduce((a, b) => Object.assign({}, a, b));

                    let result_auto_theft_17_sorted = sortObj(result_auto_theft_17_t);



                    const reptime_auto_theft17 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_auto_theft17 = Object.keys(result_auto_theft_17_sorted).map((key) => {
                    const newKey = reptime_auto_theft17[key] || key;
                    return { [newKey] : result_auto_theft_17_sorted[key] };
                    });
                    const result_auto_theft_17 = repItems_auto_theft17.reduce((a, b) => Object.assign({}, a, b));


                    ///\\\ THEFT OTHER by hour///\\
                    var time_theft_other_17=theft_other_17.map(t=>t.HOUR)
                    var result_theft_other_17_unsorted = {};
                    for(var i = 0; i < time_theft_other_17.length; ++i) {
                        if(!result_theft_other_17_unsorted[time_theft_other_17[i]])
                        result_theft_other_17_unsorted[time_theft_other_17[i]] = 0;
                        ++result_theft_other_17_unsorted[time_theft_other_17[i]];
                    }

                    const replace_time1_theft_other_17 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_theft_other17t = Object.keys(result_theft_other_17_unsorted).map((key) => {
                    const newKey = replace_time1_theft_other_17[key] || key;
                    return { [newKey] : result_theft_other_17_unsorted[key] };
                    });
                    const result_theft_other_17_t = repItems_theft_other17t.reduce((a, b) => Object.assign({}, a, b));

                    let result_theft_other_17_sorted = sortObj(result_theft_other_17_t);


                    const reptime_theft_other17 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_theft_other17 = Object.keys(result_theft_other_17_sorted).map((key) => {
                    const newKey = reptime_theft_other17[key] || key;
                    return { [newKey] : result_theft_other_17_sorted[key] };
                    });
                    const result_theft_other_17 = repItems_theft_other17.reduce((a, b) => Object.assign({}, a, b));

                    /////////////////////////////////////    2   0  1   8    //////////////////////////////////////////////////////////
                    ///\\\ ARSON by hour///\\\
                    var time_arson_18=arson_18.map(t=>t.HOUR)
                    var result_arson_18_unsorted = {};
                    for(var i = 0; i < time_arson_18.length; ++i) {
                        if(!result_arson_18_unsorted[time_arson_18[i]])
                        result_arson_18_unsorted[time_arson_18[i]] = 0;
                        ++result_arson_18_unsorted[time_arson_18[i]];
                    }

                    result_arson_18_unsorted["00"] = 0; result_arson_18_unsorted["02"] = 0; result_arson_18_unsorted["04"] = 0;
                    result_arson_18_unsorted["05"] = 0; result_arson_18_unsorted["06"] = 0; result_arson_18_unsorted["08"] = 0;
                    result_arson_18_unsorted["09"] = 0; result_arson_18_unsorted["10"] = 0; result_arson_18_unsorted["11"] = 0;
                    result_arson_18_unsorted["12"] = 0; result_arson_18_unsorted["13"] = 0; result_arson_18_unsorted["14"] = 0;
                    result_arson_18_unsorted["15"] = 0; result_arson_18_unsorted["16"] = 0; result_arson_18_unsorted["17"] = 0;
                    result_arson_18_unsorted["18"] = 0; result_arson_18_unsorted["19"] = 0; result_arson_18_unsorted["21"] = 0;
                    result_arson_18_unsorted["23"] = 0; 

                    const replace_time1_arson_18 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_arson18t = Object.keys(result_arson_18_unsorted).map((key) => {
                    const newKey = replace_time1_arson_18[key] || key;
                    return { [newKey] : result_arson_18_unsorted[key] };
                    });
                    const result_arson_18_t = repItems_arson18t.reduce((a, b) => Object.assign({}, a, b));

                    let result_arson_18_sorted = sortObj(result_arson_18_t);


                    const reptime_arson18 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_arson18 = Object.keys(result_arson_18_sorted).map((key) => {
                    const newKey = reptime_arson18[key] || key;
                    return { [newKey] : result_arson_18_sorted[key] };
                    });
                    const result_arson_18 = repItems_arson18.reduce((a, b) => Object.assign({}, a, b));

       
                    ///\\\ ASSAULT W/DANGEROUS WEAPON by hour///\\\
                    var time_assault_18=assault_weapon_18.map(t=>t.HOUR)
                    var result_assault_18_unsorted = {};
                    for(var i = 0; i < time_assault_18.length; ++i) {
                         if(!result_assault_18_unsorted[time_assault_18[i]])
                         result_assault_18_unsorted[time_assault_18[i]] = 0;
                         ++result_assault_18_unsorted[time_assault_18[i]];
                    }
       
                    const replace_time1_assault_18 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_assault18t = Object.keys(result_assault_18_unsorted).map((key) => {
                    const newKey = replace_time1_assault_18[key] || key;
                    return { [newKey] : result_assault_18_unsorted[key] };
                    });
                    const result_assault_18_t = repItems_assault18t.reduce((a, b) => Object.assign({}, a, b));

                    let result_assault_18_sorted = sortObj(result_assault_18_t);


                    const reptime_assault18 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};


                    let repItems_assault18 = Object.keys(result_assault_18_sorted).map((key) => {
                    const newKey = reptime_assault18[key] || key;
                    return { [newKey] : result_assault_18_sorted[key] };
                    });
                    const result_assault_18 = repItems_assault18.reduce((a, b) => Object.assign({}, a, b));

                    ///\\\ BURGLARY by hour///\\\
                    var time_burglary_18=burglary_18.map(t=>t.HOUR)
                    var result_burglary_18_unsorted = {};
                    for(var i = 0; i < time_burglary_18.length; ++i) {
                        if(!result_burglary_18_unsorted[time_burglary_18[i]])
                        result_burglary_18_unsorted[time_burglary_18[i]] = 0;
                        ++result_burglary_18_unsorted[time_burglary_18[i]];
                    }

                    const replace_time1_burglary_18 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_burglary18t = Object.keys(result_burglary_18_unsorted).map((key) => {
                    const newKey = replace_time1_burglary_18[key] || key;
                    return { [newKey] : result_burglary_18_unsorted[key] };
                    });
                    const result_burglary_18_t = repItems_burglary18t.reduce((a, b) => Object.assign({}, a, b));


                    let result_burglary_18_sorted = sortObj(result_burglary_18_t);
                    ;


                    const reptime_burglary18 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_burglary18 = Object.keys(result_burglary_18_sorted).map((key) => {
                    const newKey = reptime_burglary18[key] || key;
                    return { [newKey] : result_burglary_18_sorted[key] };
                    });
                    const result_burglary_18 = repItems_burglary18.reduce((a, b) => Object.assign({}, a, b));
       

                    ///\\\ HOMICIDE by hour///\\\
                    var time_homicide_18=homicide_18.map(t=>t.HOUR)
                    var result_homicide_18_unsorted = {};
                    for(var i = 0; i < time_homicide_18.length; ++i) {
                        if(!result_homicide_18_unsorted[time_homicide_18[i]])
                        result_homicide_18_unsorted[time_homicide_18[i]] = 0;
                        ++result_homicide_18_unsorted[time_homicide_18[i]];
                    }

                    result_homicide_18_unsorted["01"] = 0; result_homicide_18_unsorted["02"] = 0; result_homicide_18_unsorted["03"] = 0;
                    result_homicide_18_unsorted["04"] = 0; result_homicide_18_unsorted["05"] = 0; result_homicide_18_unsorted["06"] = 0;
                    result_homicide_18_unsorted["07"] = 0; result_homicide_18_unsorted["08"] = 0; result_homicide_18_unsorted["09"] = 0;
                    result_homicide_18_unsorted["10"] = 0; result_homicide_18_unsorted["11"] = 0; result_homicide_18_unsorted["12"] = 0;
                    result_homicide_18_unsorted["13"] = 0; result_homicide_18_unsorted["14"] = 0; result_homicide_18_unsorted["15"] = 0;
                    result_homicide_18_unsorted["16"] = 0; result_homicide_18_unsorted["17"] = 0; result_homicide_18_unsorted["18"] = 0;
                    result_homicide_18_unsorted["19"] = 0; result_homicide_18_unsorted["20"] = 0; result_homicide_18_unsorted["21"] = 0;
                    result_homicide_18_unsorted["22"] = 0; result_homicide_18_unsorted["23"] = 0;
                    
                    const replace_time1_homicide_18 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                                            '07':'7', '08':'8', '09':'9'
                                            };

                    let repItems_homicide18t = Object.keys(result_homicide_18_unsorted).map((key) => {
                        const newKey = replace_time1_homicide_18[key] || key;
                        return { [newKey] : result_homicide_18_unsorted[key] };
                        });
                    const result_homicide_18_t = repItems_homicide18t.reduce((a, b) => Object.assign({}, a, b));
                  
                    let result_homicide_18_sorted = sortObj(result_homicide_18_t);
                   ;


                    const reptime_homicide18 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                            '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                            '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                            '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_homicide18 = Object.keys(result_homicide_18_sorted).map((key) => {
                    const newKey = reptime_homicide18[key] || key;
                    return { [newKey] : result_homicide_18_sorted[key] };
                    });
                    const result_homicide_18 = repItems_homicide18.reduce((a, b) => Object.assign({}, a, b));
                


                    ///\\\ MOTOR VEHICLE THEFT by hour///\\
                    var time_vehicle_theft_18=vehicle_theft_18.map(t=>t.HOUR)
                    var result_vehicle_theft_18_unsorted = {};
                    for(var i = 0; i < time_vehicle_theft_18.length; ++i) {
                        if(!result_vehicle_theft_18_unsorted[time_vehicle_theft_18[i]])
                        result_vehicle_theft_18_unsorted[time_vehicle_theft_18[i]] = 0;
                        ++result_vehicle_theft_18_unsorted[time_vehicle_theft_18[i]];
                    }

                    const replace_time1_vehicle_theft_18 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_vehicle_theft18t = Object.keys(result_vehicle_theft_18_unsorted).map((key) => {
                    const newKey = replace_time1_vehicle_theft_18[key] || key;
                    return { [newKey] : result_vehicle_theft_18_unsorted[key] };
                    });
                    const result_vehicle_theft_18_t = repItems_vehicle_theft18t.reduce((a, b) => Object.assign({}, a, b));

                    let result_vehicle_theft_18_sorted = sortObj(result_vehicle_theft_18_t);
                    ;


                    const reptime_vehicle_theft18 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_vehicle_theft18 = Object.keys(result_vehicle_theft_18_sorted).map((key) => {
                    const newKey = reptime_vehicle_theft18[key] || key;
                    return { [newKey] : result_vehicle_theft_18_sorted[key] };
                    });
                    const result_vehicle_theft_18 = repItems_vehicle_theft18.reduce((a, b) => Object.assign({}, a, b));


       
                    ///\\\ ROBBERY by hour///\\
                    var time_robbery_18=robbery_18.map(t=>t.HOUR)
                    var result_robbery_18_unsorted = {};
                    for(var i = 0; i < time_robbery_18.length; ++i) {
                        if(!result_robbery_18_unsorted[time_robbery_18[i]])
                        result_robbery_18_unsorted[time_robbery_18[i]] = 0;
                        ++result_robbery_18_unsorted[time_robbery_18[i]];
                    }

                    
                    const replace_time1_robbery_18 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                                            '07':'7', '08':'8', '09':'9'
                                            };

                    let repItems_robbery18t = Object.keys(result_robbery_18_unsorted).map((key) => {
                        const newKey = replace_time1_robbery_18[key] || key;
                        return { [newKey] : result_robbery_18_unsorted[key] };
                        });
                    const result_robbery_18_t = repItems_robbery18t.reduce((a, b) => Object.assign({}, a, b));
                    
                    let result_robbery_18_sorted = sortObj(result_robbery_18_t);
            


                    const reptime_robbery18 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                            '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                            '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                            '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_robbery18 = Object.keys(result_robbery_18_sorted).map((key) => {
                    const newKey = reptime_robbery18[key] || key;
                    return { [newKey] : result_robbery_18_sorted[key] };
                    });
                    const result_robbery_18 = repItems_robbery18.reduce((a, b) => Object.assign({}, a, b));
       
                    ///\\\ SEX ABUSE by hour///\\
                    var time_sex_abuse_18=sex_abuse_18.map(t=>t.HOUR)
                    var result_sex_abuse_18_unsorted = {};
                    for(var i = 0; i < time_sex_abuse_18.length; ++i) {
                        if(!result_sex_abuse_18_unsorted[time_sex_abuse_18[i]])
                        result_sex_abuse_18_unsorted[time_sex_abuse_18[i]] = 0;
                        ++result_sex_abuse_18_unsorted[time_sex_abuse_18[i]];
                    }

                    const replace_time1_sex_abuse_18 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_sex_abuse18t = Object.keys(result_sex_abuse_18_unsorted).map((key) => {
                    const newKey = replace_time1_sex_abuse_18[key] || key;
                    return { [newKey] : result_sex_abuse_18_unsorted[key] };
                    });
                    const result_sex_abuse_18_t = repItems_sex_abuse18t.reduce((a, b) => Object.assign({}, a, b));

                    let result_sex_abuse_18_sorted = sortObj(result_sex_abuse_18_t);



                    const reptime_sex_abuse18 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_sex_abuse18 = Object.keys(result_sex_abuse_18_sorted).map((key) => {
                    const newKey = reptime_sex_abuse18[key] || key;
                    return { [newKey] : result_sex_abuse_18_sorted[key] };
                    });
                    const result_sex_abuse_18 = repItems_sex_abuse18.reduce((a, b) => Object.assign({}, a, b));
       
                    ///\\\ THEFT F/AUTO by hour///\\
                    var time_auto_theft_18=auto_theft_18.map(t=>t.HOUR)
                    var result_auto_theft_18_unsorted = {};
                    for(var i = 0; i < time_auto_theft_18.length; ++i) {
                        if(!result_auto_theft_18_unsorted[time_auto_theft_18[i]])
                        result_auto_theft_18_unsorted[time_auto_theft_18[i]] = 0;
                        ++result_auto_theft_18_unsorted[time_auto_theft_18[i]];
                    }
                    
                    const replace_time1_auto_theft_18 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_auto_theft18t = Object.keys(result_auto_theft_18_unsorted).map((key) => {
                    const newKey = replace_time1_auto_theft_18[key] || key;
                    return { [newKey] : result_auto_theft_18_unsorted[key] };
                    });
                    const result_auto_theft_18_t = repItems_auto_theft18t.reduce((a, b) => Object.assign({}, a, b));

                    let result_auto_theft_18_sorted = sortObj(result_auto_theft_18_t);



                    const reptime_auto_theft18 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_auto_theft18 = Object.keys(result_auto_theft_18_sorted).map((key) => {
                    const newKey = reptime_auto_theft18[key] || key;
                    return { [newKey] : result_auto_theft_18_sorted[key] };
                    });
                    const result_auto_theft_18 = repItems_auto_theft18.reduce((a, b) => Object.assign({}, a, b));

                    ///\\\ THEFT OTHER by hour///\\
                    var time_theft_other_18=theft_other_18.map(t=>t.HOUR)
                    var result_theft_other_18_unsorted = {};
                    for(var i = 0; i < time_theft_other_18.length; ++i) {
                        if(!result_theft_other_18_unsorted[time_theft_other_18[i]])
                        result_theft_other_18_unsorted[time_theft_other_18[i]] = 0;
                        ++result_theft_other_18_unsorted[time_theft_other_18[i]];
                    }

                    const replace_time1_theft_other_18 = {'00':'0', '01':'1', '02':'2', '03':'3', '04':'4', '05':'5', '06':'6',
                    '07':'7', '08':'8', '09':'9'
                    };

                    let repItems_theft_other18t = Object.keys(result_theft_other_18_unsorted).map((key) => {
                    const newKey = replace_time1_theft_other_18[key] || key;
                    return { [newKey] : result_theft_other_18_unsorted[key] };
                    });
                    const result_theft_other_18_t = repItems_theft_other18t.reduce((a, b) => Object.assign({}, a, b));

                    let result_theft_other_18_sorted = sortObj(result_theft_other_18_t);


                    const reptime_theft_other18 = {'0':'12AM', '1':'1AM', '2':'2AM', '3':'3AM', '4':'4AM', '5':'5AM', '6':'6AM',
                                        '7':'7AM', '8':'8AM', '9':'9AM', '10':'10AM', '11':'11AM', '12':'12PM',
                                        '13':'1PM', '14':'2PM', '15':'3PM', '16':'4PM', '17':'5PM','18':'6PM','19':'7PM',
                                        '20':'8PM','21':'9PM','22':'10PM','23':'11PM'};



                    let repItems_theft_other18 = Object.keys(result_theft_other_18_sorted).map((key) => {
                    const newKey = reptime_theft_other18[key] || key;
                    return { [newKey] : result_theft_other_18_sorted[key] };
                    });
                    const result_theft_other_18 = repItems_theft_other18.reduce((a, b) => Object.assign({}, a, b));

                    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    /////////////////////////////////////      Declaring plot variables         ////////////////////////////////////
                    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    
                    /////////////////////////////////////           2   0   1   4   ////////////////////////////////////////////////
                    var arson_hour_14=Object.keys(result_arson_14);
                    var count_arson_14=Object.values(result_arson_14);
                    //console.log(count_arson_14)

                    var assault_hour_14=Object.keys(result_assault_14);
                    var count_assault_14=Object.values(result_assault_14);

                    var burglary_hour_14=Object.keys(result_burglary_14);
                    var count_burglary_14=Object.values(result_burglary_14);

                    var homicide_hour_14=Object.keys(result_homicide_14);
                    var count_homicide_14=Object.values(result_homicide_14);

                    var vehicle_theft_hour_14=Object.keys(result_vehicle_theft_14);
                    var count_vehicle_theft_14=Object.values(result_vehicle_theft_14);

                    var robbery_hour_14=Object.keys(result_robbery_14);
                    var count_robbery_14=Object.values(result_robbery_14);

                    var sex_abuse_hour_14=Object.keys(result_sex_abuse_14);
                    var count_sex_abuse_14=Object.values(result_sex_abuse_14);

                    var auto_theft_hour_14=Object.keys(result_auto_theft_14);
                    var count_auto_theft_14=Object.values(result_auto_theft_14);

                    var theft_other_hour_14=Object.keys(result_theft_other_14);
                    var count_theft_other_14=Object.values(result_theft_other_14);



                    ///////////////////////////////////////  2   0   1   5   ///////////////////////////////////////////////////////////
                    var arson_hour_15=Object.keys(result_arson_15);
                    var count_arson_15=Object.values(result_arson_15);

                    var assault_hour_15=Object.keys(result_assault_15);
                    var count_assault_15=Object.values(result_assault_15);

                    var burglary_hour_15=Object.keys(result_burglary_15);
                    var count_burglary_15=Object.values(result_burglary_15);

                    var homicide_hour_15=Object.keys(result_homicide_15);
                    var count_homicide_15=Object.values(result_homicide_15);

                    var vehicle_theft_hour_15=Object.keys(result_vehicle_theft_15);
                    var count_vehicle_theft_15=Object.values(result_vehicle_theft_15);

                    var robbery_hour_15=Object.keys(result_robbery_15);
                    var count_robbery_15=Object.values(result_robbery_15);

                    var sex_abuse_hour_15=Object.keys(result_sex_abuse_15);
                    var count_sex_abuse_15=Object.values(result_sex_abuse_15);

                    var auto_theft_hour_15=Object.keys(result_auto_theft_15);
                    var count_auto_theft_15=Object.values(result_auto_theft_15);

                    var theft_other_hour_15=Object.keys(result_theft_other_15);
                    var count_theft_other_15=Object.values(result_theft_other_15);


                    
                    ///////////////////////////////////////  2   0   1   6   ///////////////////////////////////////////////////////////
                    var arson_hour_16=Object.keys(result_arson_16);
                    var count_arson_16=Object.values(result_arson_16);

                    var assault_hour_16=Object.keys(result_assault_16);
                    var count_assault_16=Object.values(result_assault_16);

                    var burglary_hour_16=Object.keys(result_burglary_16);
                    var count_burglary_16=Object.values(result_burglary_16);

                    var homicide_hour_16=Object.keys(result_homicide_16);
                    var count_homicide_16=Object.values(result_homicide_16);

                    var vehicle_theft_hour_16=Object.keys(result_vehicle_theft_16);
                    var count_vehicle_theft_16=Object.values(result_vehicle_theft_16);

                    var robbery_hour_16=Object.keys(result_robbery_16);
                    var count_robbery_16=Object.values(result_robbery_16);

                    var sex_abuse_hour_16=Object.keys(result_sex_abuse_16);
                    var count_sex_abuse_16=Object.values(result_sex_abuse_16);

                    var auto_theft_hour_16=Object.keys(result_auto_theft_16);
                    var count_auto_theft_16=Object.values(result_auto_theft_16);

                    var theft_other_hour_16=Object.keys(result_theft_other_16);
                    var count_theft_other_16=Object.values(result_theft_other_16);
                  

                    ///////////////////////////////////////  2   0   1   7   ///////////////////////////////////////////////////////////
                    var arson_hour_17=Object.keys(result_arson_17);
                    var count_arson_17=Object.values(result_arson_17);

                    var assault_hour_17=Object.keys(result_assault_17);
                    var count_assault_17=Object.values(result_assault_17);

                    var burglary_hour_17=Object.keys(result_burglary_17);
                    var count_burglary_17=Object.values(result_burglary_17);

                    var homicide_hour_17=Object.keys(result_homicide_17);
                    var count_homicide_17=Object.values(result_homicide_17);

                    var vehicle_theft_hour_17=Object.keys(result_vehicle_theft_17);
                    var count_vehicle_theft_17=Object.values(result_vehicle_theft_17);

                    var robbery_hour_17=Object.keys(result_robbery_17);
                    var count_robbery_17=Object.values(result_robbery_17);

                    var sex_abuse_hour_17=Object.keys(result_sex_abuse_17);
                    var count_sex_abuse_17=Object.values(result_sex_abuse_17);

                    var auto_theft_hour_17=Object.keys(result_auto_theft_17);
                    var count_auto_theft_17=Object.values(result_auto_theft_17);

                    var theft_other_hour_17=Object.keys(result_theft_other_17);
                    var count_theft_other_17=Object.values(result_theft_other_17);

                    
                    ///////////////////////////////////////  2   0   1   8   ///////////////////////////////////////////////////////////
                    var arson_hour_18=Object.keys(result_arson_18);
                    var count_arson_18=Object.values(result_arson_18);

                    var assault_hour_18=Object.keys(result_assault_18);
                    var count_assault_18=Object.values(result_assault_18);

                    var burglary_hour_18=Object.keys(result_burglary_18);
                    var count_burglary_18=Object.values(result_burglary_18);

                    var homicide_hour_18=Object.keys(result_homicide_18);
                    var count_homicide_18=Object.values(result_homicide_18);

                    var vehicle_theft_hour_18=Object.keys(result_vehicle_theft_18);
                    var count_vehicle_theft_18=Object.values(result_vehicle_theft_18);

                    var robbery_hour_18=Object.keys(result_robbery_18);
                    var count_robbery_18=Object.values(result_robbery_18);

                    var sex_abuse_hour_18=Object.keys(result_sex_abuse_18);
                    var count_sex_abuse_18=Object.values(result_sex_abuse_18);

                    var auto_theft_hour_18=Object.keys(result_auto_theft_18);
                    var count_auto_theft_18=Object.values(result_auto_theft_18);

                    var theft_other_hour_18=Object.keys(result_theft_other_18);
                    var count_theft_other_18=Object.values(result_theft_other_18);

                    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
                    ////////////////////////////////////    P l o t t i n g   G r a p h s  ////////////////////////////////////
                    ///////////////////////////////////////////////////////////////////////////////////////////////////////////

                   
                    ///////////////////////////////////////  2   0   1   4   /////////////////////////////////////////////////
                    var arson14 = {
                        type: 'bar',
                        x: arson_hour_14,
                        y: count_arson_14,
                        xaxis: 'x1',
                        yaxis: 'y1',
                        marker:{color:'#ff00d2'},
                        showlegend: false,
                        visible:true
                                          
                    };
                    
                    var assault14 = {
                        type: 'bar',
                        x:assault_hour_14,
                        y: count_assault_14,
                        xaxis: 'x2',
                        yaxis: 'y2',
                        marker:{color:'#c41130'},
                        showlegend: false,
                        visible:true
                      
                        
                    };

                    var burglary14 = {
                        type: 'bar',
                        x: burglary_hour_14,
                        y: count_burglary_14,
                        xaxis: 'x3',
                        yaxis: 'y3',
                        marker:{color:'#ffc107'},
                        showlegend: false,
                        visible:true
                        
                    };

                    var homicide14 = {
                        type: 'bar',
                        x: homicide_hour_14,
                        y: count_homicide_14,
                        xaxis: 'x4',
                        yaxis: 'y4',
                        marker:{color:'#999966'},
                        showlegend: false,
                        visible:true  
                        
                    };

                    var vehicle_theft14 = {
                        type: 'bar',
                        x: vehicle_theft_hour_14,
                        y: count_vehicle_theft_14,
                        xaxis: 'x5',
                        yaxis: 'y5',
                        marker:{color:'#339933'},
                        showlegend: false,
                        visible:true
                       
                    };

                    var robbery14 = {
                        type: 'bar',
                        x: robbery_hour_14,
                        y: count_robbery_14,
                        xaxis: 'x6',
                        yaxis: 'y6',
                        marker:{color:'#dc3545'},
                        showlegend: false,
                        visible:true
                       
                        
                    };

                    var sex_abuse14 = {
                        type: 'bar',
                        x: sex_abuse_hour_14,
                        y: count_sex_abuse_14,
                        xaxis: 'x7',
                        yaxis: 'y7',
                        marker:{color:'#600600'},
                        showlegend: false,
                        visible:true
                        
                    
                    };

                    var auto_theft14 = {
                        type: 'bar',
                        x: auto_theft_hour_14,
                        y: count_auto_theft_14,
                        xaxis: 'x8',
                        yaxis: 'y8',
                        marker:{color:'#212529'},
                        showlegend: false,
                        visible:true
                    
                    };

                    var theft_other14 = {
                        type: 'bar',
                        x: theft_other_hour_14,
                        y: count_theft_other_14,
                        xaxis: 'x9',
                        yaxis: 'y9',
                        marker:{color:'#cc9966'},
                        showlegend: false,
                        visible:true
                    
                    };

                    //////////////////////////////////////////////////   2     0     1      5      ////////////////////////////////////
                    var arson15 = {
                        type: 'bar',
                        x: arson_hour_15,
                        y: count_arson_15,
                        xaxis: 'x1',
                        yaxis: 'y1',
                        marker:{color:'#ff00d2'},
                        showlegend: false,
                        visible:false
                    };
                    
                    var assault15 = {
                        type: 'bar',
                        x: assault_hour_15,
                        y: count_assault_15,
                        xaxis: 'x2',
                        yaxis: 'y2',
                        marker:{color:'#c41130'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var burglary15 = {
                        type: 'bar',
                        x: burglary_hour_15,
                        y: count_burglary_15,
                        xaxis: 'x3',
                        yaxis: 'y3',
                        marker:{color:'#ffc107'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var homicide15 = {
                        type: 'bar',
                        x: homicide_hour_15,
                        y: count_homicide_15,
                        xaxis: 'x4',
                        yaxis: 'y4',
                        marker:{color:'#999966'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var vehicle_theft15 = {
                        type: 'bar',
                        x: vehicle_theft_hour_15,
                        y: count_vehicle_theft_15,
                        xaxis: 'x5',
                        yaxis: 'y5',
                        marker:{color:'#339933'},
                        showlegend: false,
                        visible:false
                    };

                    var robbery15 = {
                        type: 'bar',
                        x: robbery_hour_15,
                        y: count_robbery_15,
                        xaxis: 'x6',
                        yaxis: 'y6',
                        marker:{color:'#dc3545'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var sex_abuse15 = {
                        type: 'bar',
                        x: sex_abuse_hour_15,
                        y: count_sex_abuse_15,
                        xaxis: 'x7',
                        yaxis: 'y7',
                        marker:{color:'#600600'},
                        showlegend: false,
                        visible:false
                    
                    };

                    var auto_theft15 = {
                        type: 'bar',
                        x: auto_theft_hour_15,
                        y: count_auto_theft_15,
                        xaxis: 'x8',
                        yaxis: 'y8',
                        marker:{color:'#212529'},
                        showlegend: false,
                        visible:false
                    
                    };

                    var theft_other15 = {
                        type: 'bar',
                        x: theft_other_hour_15,
                        y: count_theft_other_15,
                        xaxis: 'x9',
                        yaxis: 'y9',
                        marker:{color:'#cc9966'},
                        showlegend: false,
                        visible:false
                    
                    };




                    ///////////////////////////////////////          2    0    1    6   /////////////////////////////////////
                    var arson16 = {
                        type: 'bar',
                        x: arson_hour_16,
                        y: count_arson_16,
                        xaxis: 'x1',
                        yaxis: 'y1',
                        marker:{color:'#ff00d2'},
                        showlegend: false,
                        visible:false
                    };
                    
                    var assault16 = {
                        type: 'bar',
                        x: assault_hour_16,
                        y: count_assault_16,
                        xaxis: 'x2',
                        yaxis: 'y2',
                        marker:{color:'#c41130'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var burglary16 = {
                        type: 'bar',
                        x: burglary_hour_16,
                        y: count_burglary_16,
                        xaxis: 'x3',
                        yaxis: 'y3',
                        marker:{color:'#ffc107'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var homicide16 = {
                        type: 'bar',
                        x: homicide_hour_16,
                        y: count_homicide_16,
                        xaxis: 'x4',
                        yaxis: 'y4',
                        marker:{color:'#999966'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var vehicle_theft16 = {
                        type: 'bar',
                        x: vehicle_theft_hour_16,
                        y: count_vehicle_theft_16,
                        xaxis: 'x5',
                        yaxis: 'y5',
                        marker:{color:'#339933'},
                        showlegend: false,
                        visible:false
                    };

                    var robbery16 = {
                        type: 'bar',
                        x: robbery_hour_16,
                        y: count_robbery_16,
                        xaxis: 'x6',
                        yaxis: 'y6',
                        marker:{color:'#dc3545'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var sex_abuse16 = {
                        type: 'bar',
                        x: sex_abuse_hour_16,
                        y: count_sex_abuse_16,
                        xaxis: 'x7',
                        yaxis: 'y7',
                        marker:{color:'#600600'},
                        showlegend: false,
                        visible:false
                    
                    };

                    var auto_theft16 = {
                        type: 'bar',
                        x: auto_theft_hour_16,
                        y: count_auto_theft_16,
                        xaxis: 'x8',
                        yaxis: 'y8',
                        marker:{color:'#212529'},
                        showlegend: false,
                        visible:false
                    
                    };

                    var theft_other16 = {
                        type: 'bar',
                        x: theft_other_hour_16,
                        y: count_theft_other_16,
                        xaxis: 'x9',
                        yaxis: 'y9',
                        marker:{color:'#cc9966'},
                        showlegend: false,
                        visible:false
                    
                    };
                   

                    
                    ///////////////////////////////////////          2    0    1    7   /////////////////////////////////////
                    var arson17 = {
                        type: 'bar',
                        x: arson_hour_17,
                        y: count_arson_17,
                        xaxis: 'x1',
                        yaxis: 'y1',
                        marker:{color:'#ff00d2'},
                        showlegend: false,
                        visible:false
                    };
                    
                    var assault17 = {
                        type: 'bar',
                        x: assault_hour_17,
                        y: count_assault_17,
                        xaxis: 'x2',
                        yaxis: 'y2',
                        marker:{color:'#c41130'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var burglary17 = {
                        type: 'bar',
                        x: burglary_hour_17,
                        y: count_burglary_17,
                        xaxis: 'x3',
                        yaxis: 'y3',
                        marker:{color:'#ffc107'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var homicide17 = {
                        type: 'bar',
                        x: homicide_hour_17,
                        y: count_homicide_17,
                        xaxis: 'x4',
                        yaxis: 'y4',
                        marker:{color:'#999966'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var vehicle_theft17 = {
                        type: 'bar',
                        x: vehicle_theft_hour_17,
                        y: count_vehicle_theft_17,
                        xaxis: 'x5',
                        yaxis: 'y5',
                        marker:{color:'#339933'},
                        showlegend: false,
                        visible:false
                    };

                    var robbery17 = {
                        type: 'bar',
                        x: robbery_hour_17,
                        y: count_robbery_17,
                        xaxis: 'x6',
                        yaxis: 'y6',
                        marker:{color:'#dc3545'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var sex_abuse17 = {
                        type: 'bar',
                        x: sex_abuse_hour_17,
                        y: count_sex_abuse_17,
                        xaxis: 'x7',
                        yaxis: 'y7',
                        marker:{color:'#600600'},
                        showlegend: false,
                        visible:false
                    
                    };

                    var auto_theft17 = {
                        type: 'bar',
                        x: auto_theft_hour_17,
                        y: count_auto_theft_17,
                        xaxis: 'x8',
                        yaxis: 'y8',
                        marker:{color:'#212529'},
                        showlegend: false,
                        visible:false
                    
                    };

                    var theft_other17 = {
                        type: 'bar',
                        x: theft_other_hour_17,
                        y: count_theft_other_17,
                        xaxis: 'x9',
                        yaxis: 'y9',
                        marker:{color:'#cc9966'},
                        showlegend: false,
                        visible:false
                    
                    };
                   
                    ///////////////////////////////////////      2     0    1     8      //////////////////////////////////////
                    var arson18 = {
                        type: 'bar',
                        x: arson_hour_18,
                        y: count_arson_18,
                        xaxis: 'x1',
                        yaxis: 'y1',
                        marker:{color:'#ff00d2'},
                        showlegend: false,
                        visible:false
                    };
                    
                    var assault18 = {
                        type: 'bar',
                        x: assault_hour_18,
                        y: count_assault_18,
                        xaxis: 'x2',
                        yaxis: 'y2',
                        marker:{color:'#c41130'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var burglary18 = {
                        type: 'bar',
                        x: burglary_hour_18,
                        y: count_burglary_18,
                        xaxis: 'x3',
                        yaxis: 'y3',
                        marker:{color:'#ffc107'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var homicide18 = {
                        type: 'bar',
                        x: homicide_hour_18,
                        y: count_homicide_18,
                        xaxis: 'x4',
                        yaxis: 'y4',
                        marker:{color:'#999966'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var vehicle_theft18 = {
                        type: 'bar',
                        x: vehicle_theft_hour_18,
                        y: count_vehicle_theft_18,
                        xaxis: 'x5',
                        yaxis: 'y5',
                        marker:{color:'#339933'},
                        showlegend: false,
                        visible:false
                    };

                    var robbery18 = {
                        type: 'bar',
                        x: robbery_hour_18,
                        y: count_robbery_18,
                        xaxis: 'x6',
                        yaxis: 'y6',
                        marker:{color:'#dc3545'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var sex_abuse18 = {
                        type: 'bar',
                        x: sex_abuse_hour_18,
                        y: count_sex_abuse_18,
                        xaxis: 'x7',
                        yaxis: 'y7',
                        marker:{color:'#600600'},
                        showlegend: false,
                        visible:false
                    
                    };

                    var auto_theft18 = {
                        type: 'bar',
                        x: auto_theft_hour_18,
                        y: count_auto_theft_18,
                        xaxis: 'x8',
                        yaxis: 'y8',
                        marker:{color:'#212529'},
                        showlegend: false,
                        visible:false
                    
                    };

                    var theft_other18 = {
                        type: 'bar',
                        x: theft_other_hour_18,
                        y: count_theft_other_18,
                        xaxis: 'x9',
                        yaxis: 'y9',
                        marker:{color:'#cc9966'},
                        showlegend: false,
                        visible:false
                    
                    };


                    

            

                    var data = [arson14, assault14, burglary14, homicide14, vehicle_theft14, robbery14, sex_abuse14, auto_theft14, theft_other14,
                                arson15, assault15, burglary15, homicide15, vehicle_theft15, robbery15, sex_abuse15, auto_theft15, theft_other15,
                                arson16, assault16, burglary16, homicide16, vehicle_theft16, robbery16, sex_abuse16, auto_theft16, theft_other16,
                                arson17, assault17, burglary17, homicide17, vehicle_theft17, robbery17, sex_abuse17, auto_theft17, theft_other17,
                                arson18, assault18, burglary18, homicide18, vehicle_theft18, robbery18, sex_abuse18, auto_theft18, theft_other18,
                            ];

                    
                    var updatemenus=[{
                        buttons: [   
                            {
                                args: [{visible: [true,true,true,true,true,true,true,true,true,
                                                false,false,false,false,false,false,false,false,false,
                                                false,false,false,false,false,false,false,false,false,
                                                false,false,false,false,false,false,false,false,false,
                                                false,false,false,false,false,false,false,false,false
                                            ]}],
                                label: '2014 ',
                                method: 'update'
                            },
                            {
                                args: [{visible: [false,false,false,false,false,false,false,false,false,
                                                true,true,true,true,true,true,true,true,true,
                                                false,false,false,false,false,false,false,false,false,
                                                false,false,false,false,false,false,false,false,false,
                                                false,false,false,false,false,false,false,false,false
                                            ]}],
                                label:'2015',
                                method:'update'
                            
                            },
                            {
                                args: [{visible: [false,false,false,false,false,false,false,false,false,
                                                false,false,false,false,false,false,false,false,false,
                                                true,true,true,true,true,true,true,true,true,
                                                false,false,false,false,false,false,false,false,false,
                                                false,false,false,false,false,false,false,false,false
                                            ]}],
                                label:'2016',
                                method:'update'
                            
                            },
                            {
                                args: [{visible: [false,false,false,false,false,false,false,false,false,
                                                false,false,false,false,false,false,false,false,false,
                                                false,false,false,false,false,false,false,false,false,
                                                true,true,true,true,true,true,true,true,true,
                                                false,false,false,false,false,false,false,false,false
                                            ]}],
                                label:'2017',
                                method:'update'
                            
                            },
                            {
                                args: [{visible: [false,false,false,false,false,false,false,false,false,
                                                false,false,false,false,false,false,false,false,false,
                                                false,false,false,false,false,false,false,false,false,
                                                false,false,false,false,false,false,false,false,false,
                                                true,true,true,true,true,true,true,true,true
                                            ]}],
                                label:'2018',
                                method:'update'
                            
                            }
                                        
                        ],
                        direction: 'left',
                        pad: {'r': 10, 't': 10},
                        showactive: true,
                        type: 'buttons',
                        x: 1,
                        xanchor: 'right',
                        y: 1.1,
                        yanchor: 'top',
                        active: 0,
                        bgcolor: "#00FFFF"
                        //font: {color: '#5072a8'} 
                    }];


                    var layout = {
                        updatemenus: updatemenus,

                        xaxis1: {  autotick: false,
                            tickangle: 45,
                            automargin: true,
                            tickfont: {size: 10}
                        },
                        xaxis2: {  autotick: false,
                            tickangle: 45,
                            automargin: true,
                            tickfont: {size: 10}
                        },
                        xaxis3: {  autotick: false,
                            tickangle: 45,
                            automargin: true,
                            tickfont: {size: 10}
                        },
                        xaxis4: {  autotick: false,
                            tickangle: 45,
                            automargin: true,
                            tickfont: {size: 10}
                        },
                        xaxis5: {  autotick: false,
                            tickangle: 45,
                            automargin: true,
                            tickfont: {size: 10}
                        },
                        xaxis6: {  autotick: false,
                            tickangle: 45,
                            automargin: true,
                            tickfont: {size: 10}
                        },
                        xaxis7: {  autotick: false,
                            tickangle: 45,
                            automargin: true,
                            tickfont: {size: 10}
                        },
                        xaxis8: {  autotick: false,
                            tickangle: 45,
                            automargin: true,
                            tickfont: {size: 10}
                        },
                        xaxis9: {title:"Hour of the day",
                            autotick: false,
                            tickangle: 45,
                            tickfont: {size: 10}
                        },
                        
                    
                        annotations: [
                            {
                                text: "ARSON",
                                font: {size: 14, color: 'black'},
                                showarrow: false,
                                align: 'center',
                                x: 0.9,
                                y: 1,
                                xref: 'paper',
                                yref: 'paper'
                            },
                            {
                                text: "ASSAULT W/DANGEROUS WEAPON",
                                font: {size: 14,color: 'black'},
                                showarrow: false,
                                align: 'center',
                                x: 0.3,
                                y: 0.89,
                                xref: 'paper',
                                yref: 'paper'
                            },
                            {
                                text: "BURGLARY",
                                font: {size: 14,color: 'black'},
                                showarrow: false,
                                align: 'center',
                                x: 0.13,
                                y: 0.76,
                                xref: 'paper',
                                yref: 'paper'
                            },
                            {
                                text: "HOMICIDE",
                                font: {size: 14,color: 'black'},
                                showarrow: false,
                                align: 'center',
                                x: 0.13,
                                y: 0.64,
                                xref: 'paper',
                                yref: 'paper'
                            },
                            {
                                text: "MOTOR VEHICLE THEFT",
                                font: {size: 14,color: 'black'},
                                showarrow: false,
                                align: 'center',
                                x: 1.0,
                                y: 0.53,
                                xref: 'paper',
                                yref: 'paper'
                            }, {
                                text: "ROBBERY",
                                font: {size: 14,color: 'black'},
                                showarrow: false,
                                align: 'center',
                                x: 0.13,
                                y: 0.41,
                                xref: 'paper',
                                yref: 'paper'
                            }, {
                                text: "SEX ABUSE",
                                font: {size: 14,color: 'black'},
                                showarrow: false,
                                align: 'center',
                                x: 0.2,
                                y: 0.29,
                                xref: 'paper',
                                yref: 'paper'
                            }, {
                                text: "THEFT F/AUTO",
                                font: {size: 14,color: 'black'},
                                showarrow: false,
                                align: 'center',
                                x: 0.01,
                                y: 0.17,
                                xref: 'paper',
                                yref: 'paper'
                            }, {
                                text: "THEFT/OTHER",
                                font: {size: 14,color: 'black'},
                                showarrow: false,
                                align: 'center',
                                x: 0.07,
                                y: 0.05,
                                xref: 'paper',
                                yref: 'paper'
                            }
                        ],

                        grid: {rows: 9, columns: 1, pattern: 'independent'},
                        autosize: true,
                        margin: {
                            l: 50,
                            r: 50,
                            b: 50,
                            t: 50,
                            pad: 4
                        }
                    };
            
           
                    Plotly.newPlot('hour1', data, layout,{responsive: true});
                    Plotly.newPlot('hour2', data, layout,{responsive: true});
                    Plotly.newPlot('hour3', data, layout,{responsive: true});

                   
                });

            });

        });


    });

});





