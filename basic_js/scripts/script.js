var dtu = {
    "coe": {
        "A1": {
            "name": ["Akshay", "Raghav", "Saksham"],
            "rno": [3, 50, 62],
            "marks": [81, 93, 87]
        },
        "A2": {
            "name": ["Bhaskar", "Manan", "Tanishq"],
            "rno": [11, 37, 68],
            "marks": [96, 88, 93]
        }
    },

    "it": {
        "A3": {
            "name": ["Aman", "Harman", "Vandit"],
            "rno": [4, 33, 71],
            "marks": [79, 95, 80]
        },
        "A4": {
            "name": ["Bhuvesh", "Mudit", "Yash"],
            "rno": [13, 40, 77],
            "marks": [97, 92, 89],
        }
    },

    "se": {
        "A5": {
            "name": ["Arnav", "Chirag", "Muskan"],
            "rno": [7, 23, 35],
            "marks": [90, 98, 91]
        },
        "A6": {
            "name": ["Dhananjay", "Harshita", "Vaishnavi"],
            "rno": [17, 29, 64],
            "marks": [79, 82, 91]
        }
    }
}

var btn_clicks = 0;

function fill_table(){

    if(btn_clicks > 0){
        return
    }
    btn_clicks++

    let table = document.getElementById('myTable')
    let coe_row = 1
    let it_row = 3
    let se_row = 5
    
    // console.log(table.rows)
    for(const key in dtu) {
        const val = dtu[key];
        // console.log("key is ", key, "\n", "value is", val)   
        let dept_row_ctr = 0
       
        for(const key1 in val){
            const val1 = dtu[key][key1]
            // console.log(key1, val1)
            const entries = val1["name"].length
            let str = ""
            str += `<td class="batches" rowspan="${entries}">${key1}</td>`
            
            for(let i=0 ; i<entries ; i++){
                const headers = Object.keys(val1)
                const len = headers.length
                // console.log(i+1)
                
                str += `<td class="sno">${dept_row_ctr+1}</td>`
                for(let j=0 ; j<len ; j++){
                    // console.log(val1[headers[j]][i])
                    str += `<td class="data">${val1[headers[j]][i]}</td>`
                }

                let element
                if(key == "coe"){
                    element = table.insertRow(coe_row+1+dept_row_ctr)
                    dept_row_ctr++
                    it_row++
                    se_row++
                }
                if(key == "it"){
                    element = table.insertRow(it_row+1+dept_row_ctr)
                    dept_row_ctr++
                    se_row++
                }

                if(key == "se"){
                    element = table.insertRow(se_row+1+dept_row_ctr)
                    dept_row_ctr++
                }

                element.innerHTML = str
                str = ""
            }
        }
    }
}