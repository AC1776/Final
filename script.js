
    const labels =[ "01/2019", "02/2019", "03/2019", "04/2019", "05/2019", "06/2019", "07/2019"  , "08/2019", "09/2019", "10/2019", "11/2019", "12/2019", "01/2020","02/2020","03/2020", "04/2020", "05/2020", "06/2020", "07/2020", "08/2020", "09/2020","10/2020"];
//    console.log("labels");
//    console.log(labels);

// These are colors from chart.js utils
    const CHART_COLORS = {
      red: 'rgb(255, 99, 132)',
      orange: 'rgb(255, 159, 64)',
      yellow: 'rgb(255, 205, 86)',
      green: 'rgb(75, 192, 192)',
      blue: 'rgb(54, 162, 235)',
      purple: 'rgb(153, 102, 255)',
      grey: 'rgb(201, 203, 207)'
    };
//    console.dir(CHART_COLORS);

    const CHART_COLORS_50_Percent = {
      red: 'rgba(255, 99, 132, 0.5)',
      orange: 'rgba(255, 159, 64, 0.5)',
      yellow: 'rgba(255, 205, 86, 0.5)',
      green: 'rgba(75, 192, 192, 0.5)',
      blue: 'rgba(54, 162, 235, 0.5)',
      purple: 'rgba(153, 102, 255, 0.5)',
      grey: 'rgba(201, 203, 207, 0.5)'
    };
//    console.log(CHART_COLORS_50_Percent);
//    end utils

// "public  ResponseEntity exchange(URI url,
//   HttpMethod method,
//   HttpEntity<?> requestEntity,
//   Class responseType)
// throws RestClientExcepti"on

// ResponseEntity responseEntity = restTemplate.exchange(apiURL, HttpMethod.POST,
//                                                     HttpEntity httpEntity,
//                                                     APIResponse[].class);
// APIResponse[] = responseEntity.getBody()
// {
//   "status": "REQUEST_SUCCEEDED",
//    "responseTime": 706,
//    "message": [ ],
//    "Results": [
  // {
  //       "series": [{
  //        "seriesID": "WMU00140201020000001300002500",
  //        "catalog": {
  //          "series_title": "Average hourly wage for business and financial operations occupations, full-time, in Bloomington, IN",
  //          "series_id": "WMU00140201020000001300002500",
  //          "seasonality": "Not Seasonally Adjusted",
  //          "survey_name": "Modeled Wage Estimates",
  //          "survey_abbreviation": "WM",
  //          "measure_data_type": "Average Hourly Wage",
  //          "commerce_industry": "All industries",
  //          "occupation": "Business and Financial Operations Occupations",
  //          "occupation_work_class": "Civilian workers",
  //          "area": "Bloomington, IN"
  //        },
  //        "data": [{
  //          "year": "2018",
  //          "period": "A01",
  //          "periodName": "Annual",
  //          "latest": "true",
  //          "value": "30.71",
  //          "aspects": [{
  //            "name": "Relative Standard Error",
  //            "value": "1.9",
  //            "footnotes": [{}]
  //          }],
  //          "footnotes": [{}]
  //        }]
  //      },
  //            . . .
  //  }
    const data = {
      labels: labels,
      datasets: [
        {
          //<link href="https://api.bls.gov/publicAPI/v2/timeseries/data/" integrity="">
          //<scr
          label: 'Person 1',
          data: [120, 125, 120, 119, 118],
          borderColor: CHART_COLORS.red,
          backgroundColor: CHART_COLORS_50_Percent.red,
          hidden: true
        },
        {
          label: 'Person 2',
          data: [180, 185, 186, 184, 180],
          borderColor: CHART_COLORS.blue,
          backgroundColor: CHART_COLORS_50_Percent.blue,
          hidden: true
        },
        {  label: 'Person 3',
        data: [195, 185, 177, 169, 165],
        borderColor: CHART_COLORS.orange,
        backgroundColor: CHART_COLORS_50_Percent.orange,
        hidden: true


        }
      ]
    };
  //  console.dir(data);

    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart'
          }
        }
      }
    };
//    console.log(config);

const myChart = new Chart(
      document.getElementById('myChart'),
        config);

        // {
        //   "status": "REQUEST_SUCCEEDED",
        //   "responseTime": 16,
        //   "message": [
            
        //   ],
        //   "Results": [
        //     {
        //       "series": [
        //         {
        //           "seriesID": "LAUCN040010000000005",
        //           "data": [
        //             {
        //               "year": "2013",
        //               "period": "M11",
        //               "periodName": "November",
        //               "value": "16393",
        //               "footnotes": [
        //                 {
        //                   "code": "P",
        //                   "text": "Preliminary."
        //                 }
        //               ]
        //             },
        //             {
        //               "year": "2013",
        //               "period": "M10",
        //               "periodName": "October",
        //               "value": "16536",
        //               "footnotes": [
        //                 {
        //                  ...
        //                  }
        //               ]
        //             }
        //           ]
        //         }
        //       ]
        //     }
        //   ]
        // }
//    console.dir(myChart);
//    console.log("Ending");

