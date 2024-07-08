let files = [
    // "JSONswithStandardRanks/MergedJSONfile/merged_tree.json",
    "JSONswithStandardRanks/MergedJSONfile/taxonomy.json",


    "JSONswithStandardRanks/BetterIndivJSONfiles/Jim_Walsh_before.json",
    "JSONswithStandardRanks/BetterIndivJSONfiles/Jim_Walsh_after.json",

    "JSONswithStandardRanks/BetterIndivJSONfiles/Rainey_Dunham_1.json",
    "JSONswithStandardRanks/BetterIndivJSONfiles/Maclay_Ramsey_1.json",
    "JSONswithStandardRanks/BetterIndivJSONfiles/Leo_Grady_2.json",
    "JSONswithStandardRanks/BetterIndivJSONfiles/Leo_Grady_1.json",
    "JSONswithStandardRanks/BetterIndivJSONfiles/Jill_Sue_1.json",
    "JSONswithStandardRanks/BetterIndivJSONfiles/Jaclyn_Kawwas_1.json",
    "JSONswithStandardRanks/BetterIndivJSONfiles/Audra_Walker_1.json",



    "JSONswithStandardRanks/BetterIndivJSONfiles/SRR1215593_Crohn's Disease.json", 
    "JSONswithStandardRanks/BetterIndivJSONfiles/SRR5936079_Crohn's Disease.json",
    "JSONswithStandardRanks/BetterIndivJSONfiles/SRR5950737_Crohn's Disease.json",
    "JSONswithStandardRanks/BetterIndivJSONfiles/SRR5983330_Crohn's Disease.json", 
    "JSONswithStandardRanks/BetterIndivJSONfiles/SRR5983386_Crohn's Disease.json",

    "JSONswithStandardRanks/BetterIndivJSONfiles/ERR260506_Diarrhea.json",
    "JSONswithStandardRanks/BetterIndivJSONfiles/ERR262943_Diarrhea.json",
    "JSONswithStandardRanks/BetterIndivJSONfiles/ERR262958_Diarrhea.json",
    "JSONswithStandardRanks/BetterIndivJSONfiles/SRR5831593_Diarrhea.json", 
    "JSONswithStandardRanks/BetterIndivJSONfiles/SRR5831595_Diarrhea.json",
    "JSONswithStandardRanks/BetterIndivJSONfiles/SRR5831603_Diarrhea.json",

    "JSONswithStandardRanks/BetterIndivJSONfiles/ERR478967_Healthy.json",
    "JSONswithStandardRanks/BetterIndivJSONfiles/ERR719231_Healthy.json",
    "JSONswithStandardRanks/BetterIndivJSONfiles/ERR1190638_Healthy.json", 
    "JSONswithStandardRanks/BetterIndivJSONfiles/SRR341621_Healthy.json",  
    "JSONswithStandardRanks/BetterIndivJSONfiles/SRR6474217_Healthy.json",
    "JSONswithStandardRanks/BetterIndivJSONfiles/SRR6474279_Healthy.json",


    "JSONswithStandardRanks/BetterIndivJSONfiles/ERR478985_Bowel Cancer.json",
    "JSONswithStandardRanks/BetterIndivJSONfiles/ERR479334_Bowel Cancer.json", 
    "JSONswithStandardRanks/BetterIndivJSONfiles/ERR479517_Bowel Cancer.json",  
    "JSONswithStandardRanks/BetterIndivJSONfiles/ERR480854_Bowel Cancer.json",
    "JSONswithStandardRanks/BetterIndivJSONfiles/ERR2726653_Bowel Cancer.json",

    "JSONswithStandardRanks/BetterIndivJSONfiles/ERR527150_Liver Cirrhosis.json",
    "JSONswithStandardRanks/BetterIndivJSONfiles/ERR528318_Liver Cirrhosis.json", 
    "JSONswithStandardRanks/BetterIndivJSONfiles/ERR532384_Liver Cirrhosis.json",  
    "JSONswithStandardRanks/BetterIndivJSONfiles/ERR532392_Liver Cirrhosis.json",
    "JSONswithStandardRanks/BetterIndivJSONfiles/ERR532623_Liver Cirrhosis.json",

    "JSONswithStandardRanks/BetterIndivJSONfiles/ERR1912974_Parkinson's Disease.json",
    "JSONswithStandardRanks/BetterIndivJSONfiles/ERR1913019_Parkinson's Disease.json", 
    "JSONswithStandardRanks/BetterIndivJSONfiles/ERR1913069_Parkinson's Disease.json",  
    "JSONswithStandardRanks/BetterIndivJSONfiles/ERR1913124_Parkinson's Disease.json",
    "JSONswithStandardRanks/BetterIndivJSONfiles/ERR1913188_Parkinson's Disease.json",
]


let mainData
let width
let height
let radius


function innerRadius(d, index, checkedLevels){
    if (checkedLevels.length === 7){
        if (d.depth === 7){
            return index === 0 ? 620 : 480
        }
        if (d.depth === 6){
            return index === 0 ? 550 : 430
        }
        if (d.depth === 5){
            return index === 0 ? 480 : 380
        }
        if (d.depth === 4){
            return index === 0 ? 400 : 330
        }
        if (d.depth === 3){
            return index === 0 ? 320 : 280
        }
        else if (d.depth === 2){
            return index === 0 ? 230 : 230
        }
        else if (d.depth === 1){
            return 30
        }
    }
    if (checkedLevels.length === 6){
        if (d.depth === checkedLevels[5]){
            return index === 0 ? 600 : 470
        }
        if (d.depth === checkedLevels[4]){
            return index === 0 ? 510 : 410
        }
        if (d.depth === checkedLevels[3]){
            return index === 0 ? 420 : 350
        }
        if (d.depth === checkedLevels[2]){
            return index === 0 ? 330 : 290
        }
        if (d.depth === checkedLevels[1]){
            return index === 0 ? 230 : 230
        }
        else if (d.depth === checkedLevels[0]){
            return 30
        }
    }
    if (checkedLevels.length === 5){
        if (d.depth === checkedLevels[4]){
            return index === 0 ? 590 : 470
        }
        if (d.depth === checkedLevels[3]){
            return index === 0 ? 480 : 400
        }
        if (d.depth === checkedLevels[2]){
            return index === 0 ? 360 : 320
        }
        if (d.depth === checkedLevels[1]){
            return index === 0 ? 230 : 230
        }
        else if (d.depth === checkedLevels[0]){
            return 30
        }
    }
    if (checkedLevels.length === 4){
        if (d.depth === checkedLevels[3]){
            return index === 0 ? 590 : 470
        }
        if (d.depth === checkedLevels[2]){
            return index === 0 ? 480 : 400
        }
        if (d.depth === checkedLevels[1]){
            return index === 0 ? 360 : 320
        }
        if (d.depth === checkedLevels[0]){
            return 30
        }
    }
    if (checkedLevels.length === 3){
        if (d.depth === checkedLevels[2]){
            return index === 0 ? 590 : 470
        }
        if (d.depth === checkedLevels[1]){
            return index === 0 ? 480 : 400
        }
        else if (d.depth === checkedLevels[0]){
            return 30
        }
    }
    if (checkedLevels.length === 2){
        if (d.depth === checkedLevels[1]){
            return index === 0 ? 590 : 470
        }
        else if (d.depth === checkedLevels[0]){
            return 30
        }
    }
    if (checkedLevels.length === 1){
        if (d.depth === checkedLevels[0]){
            return 30
        }
    }
    if (checkedLevels.length === 0){
        return 0
    }
}


function outerRadius(d, index, csvData, checkedLevels){
    if (checkedLevels.length === 7){
        if (d.depth === 7){
            return index === 0 ? 690 : 530
        }
        if (d.depth === 6){
            return index === 0 ? 620 : 480
        }
        if (d.depth === 5){
            return index === 0 ? 550 : 430
        }
        if (d.depth === 4){
            return index === 0 ? 480 : 380
        }
        if (d.depth === 3){
            return index === 0 ? 400 : 330
        }
        else if (d.depth === 2){
            return index === 0 ? 320 : 280
        }
        else if (d.depth === 1){
            return index === 0 ? 230 : 230
        }
    }
    if (checkedLevels.length === 6){
        if (d.depth === checkedLevels[5]){
            return index === 0 ? 690 : 530
        }
        if (d.depth === checkedLevels[4]){
            return index === 0 ? 600 : 470
        }
        if (d.depth === checkedLevels[3]){
            return index === 0 ? 510 : 410
        }
        if (d.depth === checkedLevels[2]){
            return index === 0 ? 420 : 350
        }
        if (d.depth === checkedLevels[1]){
            return index === 0 ? 330 : 290
        }
        else if (d.depth === checkedLevels[0]){
            return index === 0 ? 230 : 230
        }
    }
    if (checkedLevels.length === 5){
        if (d.depth === checkedLevels[4]){
            return index === 0 ? 690 : 530
        }
        if (d.depth === checkedLevels[3]){
            return index === 0 ? 590 : 470
        }
        if (d.depth === checkedLevels[2]){
            return index === 0 ? 480 : 400
        }
        if (d.depth === checkedLevels[1]){
            return index === 0 ? 360 : 320
        }
        else if (d.depth === checkedLevels[0]){
            return index === 0 ? 230 : 230
        }
    }
    if (checkedLevels.length === 4){
        if (d.depth === checkedLevels[3]){
            return index === 0 ? 690 : 530
        }
        if (d.depth === checkedLevels[2]){
            return index === 0 ? 590 : 470
        }
        if (d.depth === checkedLevels[1]){
            return index === 0 ? 480 : 400
        }
        if (d.depth === checkedLevels[0]){
            return index === 0 ? 360 : 320
        }
    }
    if (checkedLevels.length === 3){
        if (d.depth === checkedLevels[2]){
            return index === 0 ? 690 : 530
        }
        if (d.depth === checkedLevels[1]){
            return index === 0 ? 590 : 470
        }
        else if (d.depth === checkedLevels[0]){
            return index === 0 ? 480 : 400
        }
    }
    if (checkedLevels.length === 2){
        if (d.depth === checkedLevels[1]){
            return index === 0 ? 690 : 530
        }
        else if (d.depth === checkedLevels[0]){
            return index === 0 ? 590 : 470
        }
    }
    if (checkedLevels.length === 1){
        if (d.depth === checkedLevels[0]){
            return index === 0 ? 690 : 530
        }
    }
    if (checkedLevels.length === 0){
        return 0
    }
}




function nameMapping(val){
    if (val === 's'){
        return "species"
    }
    else if (val === 'st'){
        return "strain"
    }
    else if (val === 'g'){
        return "genus"
    }
    else if (val === 'f'){
        return "family"
    }
    else if (val === 'o'){
        return "order"
    }
    else if (val === 'c'){
        return "class"
    }
    else if (val === 'p'){
        return "phylum"
    }
    else if (val === 'sk'){
        return "superkingdom"
    }
    return ""
}


function handleMouseOver(event, fileIndex, p, givenDataRoot, nodeName, cdfContainerData) {

    const hoveredPathId = "path-" + p.data.name + '-' + fileIndex
    // console.log(hoveredPathId)

    // // Reset the style of all paths
    d3.selectAll(".sunburst-path")
        .style("stroke", "none")
        .style("stroke-width", 0);

    // // Apply the style to the hovered path only
    d3.selectAll(".sunburst-path")
        .filter(function(d) {
            return this.id === hoveredPathId;
        })
        .style("stroke", "black")
        .style("stroke-width", 3);
    
    let myVar = p.data.name
    let myNames = myVar.split("__")
    let index = myVar.indexOf("_")
    let substringBeforeUnderscore = ''
    if (index !== -1) {
        substringBeforeUnderscore = nameMapping(myVar.substring(0, index));
    } 

    let lastIndex = nodeName.lastIndexOf('__')
    let taxonID = nodeName.substring(lastIndex + 2)
    let cdf = findTaxonCDFbyID(cdfContainerData, taxonID)
    if (cdf === null){
        cdf = 'N/A'
    }
    else{
        cdf = (parseFloat(cdf) * 100).toFixed(3) + '%'
    }

    let myVal
    if (fileIndex === 0){
        myVal = (p.value * 100/ 17).toFixed(6) + '%'
    }
    else{
        myVal = findNodeValueByName(cdfContainerData, taxonID)
        if (myVal === undefined){
            myVal = 0 + '%'
        }
        else{
            myVal = (myVal * 100).toFixed(6) + '%'
        }
    }


    let mytext 
    if (fileIndex === 0){
        mytext = 'Name : ' + myNames[1] + "<br>" +
        'Average of Relative Abundance[Across 17 datasets] : ' + myVal+ "<br>" + 
        'Rank : ' + substringBeforeUnderscore + "<br>" +
        'NCBI Taxon ID: ' + myNames[2] + "<br>"
    }
    else{
        mytext = 'Name : ' + myNames[1] + "<br>" +
        'Relative Abundance in this dataset : ' + myVal+ "<br>" + 
        'Percentile Value : ' + cdf + "<br>" +
        'Rank : ' + substringBeforeUnderscore + "<br>" +
        'NCBI Taxon ID: ' + myNames[2] + "<br>"
    }

    tooltip.innerHTML = mytext
    tooltip.style.left = `${event.pageX + 5}px`;
    tooltip.style.top = `${event.pageY + 5}px`;
    tooltip.style.visibility = 'visible';
}


// Function to handle mouseout event
function mouseout(event, p) {
    d3.selectAll(".sunburst-path").each(function(d, i) {
            var element = d3.select(this);
            element.style("stroke", element.attr("original-stroke"));
            element.style("stroke-width", element.attr("original-stroke-width"));
        });

                                    
    const tooltip = document.getElementById('tooltip');
    tooltip.style.visibility = 'hidden';
}



function findTaxonCDFbyID(dataArray, taxonId) {
    const element = dataArray.find(item => item.ncbi_taxon_id === taxonId);
    return element ? element.CDF : null; // Return the taxon_rank_level if found, else return null
}


function findNodeValueByName(dataArray, taxonId) {
    const element = dataArray.find(item => item.ncbi_taxon_id === taxonId);
    return element ? element.relative_abundance : null; // Return the taxon_rank_level if found, else return null
}

function findTaxonWeightbyID(dataArray, taxonId){
    for (let obj of dataArray) {
        if (obj.ncbi_taxon_id === taxonId) {
            return obj.weight;
        }
    }
    return null; // Return null if no match found
}

function findTaxonRAbyID(dataArray, taxonId){
    const element = dataArray.find(item => item.ncbi_taxon_id === taxonId);
    return element ? element.relative_abundance : 0; // Return the taxon_rank_level if found, else return null
}

function rendering(sliderMin, sliderMax, indicatorValue){
    (async function () {
        sliderMin = sliderMin/100
        sliderMax = sliderMax/100
        
        console.log('Minimum Slider Value: ', sliderMin)
        console.log('Maximum Slider Value:', sliderMax)

        // let myFile
        let myRow
        let csvData = await d3.csv('CSVs/Diseases.csv');
        let transformedData

        if (indicatorValue !== 'ao'){
            if (indicatorValue === 'dio'){
                for (const row in csvData){
                    if (csvData[row].Name === 'Diarrhea'){
                        myRow = csvData[row]
                    }
                }
            }
            else if (indicatorValue === 'cio'){
                for (const row in csvData){
                    if (csvData[row].Name === 'Crohn Disease'){
                        myRow = csvData[row]
                    }
                }
            }
            else if (indicatorValue === 'bcio'){
                for (const row in csvData){
                    if (csvData[row].Name === 'Colorectal Neoplasms'){
                        myRow = csvData[row]
                    }
                }
            }
            else if (indicatorValue === 'pio'){
                for (const row in csvData){
                    if (csvData[row].Name === 'Parkinson Disease'){
                        myRow = csvData[row]
                    }
                }
            }
            else if (indicatorValue === 'lcio'){
                for (const row in csvData){
                    if (csvData[row].Name === 'Liver Cirrhosis'){
                        myRow = csvData[row]
                    }
                }
            }
    
            // Function to transform the data object
            function transformObject(obj) {
                const transformedObjects = [];
                Object.keys(obj).forEach((key, index) => {
                    if (index > 1){
                        let value = obj[key]
    
                        const firstCloseBracketIndex = value.indexOf(']')
                        const firstOpenParenIndex = value.indexOf('(');
                        const result = value.substring(firstCloseBracketIndex+1, firstOpenParenIndex).trim();
    
                        let match2 = value.match(/\[(\d+)\]/);
                        let number = match2 ? match2[1] : null;
                        if (number === null){
                            number = '620'
                        }
    
                        let match3 = value.match(/\((-?\d+(?:\.\d+)?)\)/);
                        let number2 = match3 ? match3[1] : null;
    
    
                        const transformedObj = {};
                        transformedObj.organism = result; // Example transformation
                        transformedObj.ncbi_taxon_id = number; // Example transformation for key2
                        transformedObj.weight = number2; // Example transformation for key3
                        transformedObjects.push(transformedObj);
                    }
                });
                return transformedObjects;
            }
            
            transformedData = transformObject(myRow);
        }
        
        
        for (let i = 0; i < files.length - 39; i++) {
            // Using an IIFE (Immediately Invoked Function Expression) to create a closure
            await (async function(index) {
                let data = await d3.json(files[index]);
                if (index === 0){
                    mainData = data
                    width = 1500;
                    height = 1500;
                    radius = 100;
                }
                else{
                    width = 1150;
                    height = 1220;
                    radius = 100;
                }
    
                let containers = [
                    ".svg-container", ".svg-container-2", ".svg-container-3", 
                    '.svg-container-4', '.svg-container-5', '.svg-container-6', 
                    '.svg-container-7', '.svg-container-8', '.svg-container-9', 
                    '.svg-container-10', '.svg-container-11', '.svg-container-12', 
                    '.svg-container-13', '.svg-container-14', '.svg-container-15', 
                    '.svg-container-16', '.svg-container-17', '.svg-container-18',
                    '.svg-container-19', '.svg-container-20', '.svg-container-21',
                    '.svg-container-22', '.svg-container-23', '.svg-container-24',
                    '.svg-container-25', '.svg-container-26', '.svg-container-27',
                    '.svg-container-28', '.svg-container-29', '.svg-container-30',
                    '.svg-container-31', '.svg-container-32', '.svg-container-33',
                    '.svg-container-34', '.svg-container-35', '.svg-container-36',
                    '.svg-container-37', '.svg-container-38', '.svg-container-39',
                    '.svg-container-40', '.svg-container-41', '.svg-container-42',
                ];
    
                // console.log('D:', data)
    
                let svg = d3.select(containers[index]).append("svg")
                    .attr("width", width)
                    .attr("height", height)
                    .append("g")
                    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    
                let word = (files[index]).slice(44, -5) 
                // console.log(word)
    
                if (index === 0){
                    if (indicatorValue === 'dio' || indicatorValue === 'cio' || indicatorValue === 'bcio'
                        || indicatorValue === 'pio' || indicatorValue === 'lcio'){
                            if (indicatorValue === 'dio'){
                                svg.append("text")
                                .attr("x", -272)
                                .attr("y", -455)
                                .attr("font-size", "58")
                                .attr("fill", "Black")
                                .text("Diarrhea Indicators Organisms")
                            }
                            else if (indicatorValue === 'cio'){
                                svg.append("text")
                                .attr("x", -272)
                                .attr("y", -455)
                                .attr("font-size", "58")
                                .attr("fill", "Black")
                                .text("Crohns Indicator Organisms")
                            }
                            else if (indicatorValue === 'bcio'){
                                svg.append("text")
                                .attr("x", -272)
                                .attr("y", -455)
                                .attr("font-size", "58")
                                .attr("fill", "Black")
                                .text("Bowel Cancer Indicator Organisms")
                            }
                            else if (indicatorValue === 'pio'){
                                svg.append("text")
                                .attr("x", -272)
                                .attr("y", -455)
                                .attr("font-size", "58")
                                .attr("fill", "Black")
                                .text("Parkinsons Indicator Organisms")
                            }
                            else if (indicatorValue === 'lcio'){
                                svg.append("text")
                                .attr("x", -272)
                                .attr("y", -455)
                                .attr("font-size", "58")
                                .attr("fill", "Black")
                                .text("Liver Cirrhosis Indicator Organisms")
                            }

                            svg.append("rect")
                                .attr("x", 282)    // x position of the rectangle
                                .attr("y", -100)    // y position of the rectangle
                                .attr("width", 400) // width of the rectangle
                                .attr("height", 100) // height of the rectangle
                                .attr("fill", "red") // fill color of the rectangle using the gradient
                                .attr("stroke", "black")
                                .attr("stroke-width", "3")

                            svg.append("text")
                                .attr("x", 272)
                                .attr("y", -25)
                                .attr("font-size", "58")
                                .attr("fill", "Black")
                                .attr("text-anchor", "end")
                                .text(("High Abundance Indicator Organism"))

                            // Append a rectangle to the SVG container and apply the gradient
                            svg.append("rect")
                                .attr("x", 282)    // x position of the rectangle
                                .attr("y", 100)    // y position of the rectangle
                                .attr("width", 400) // width of the rectangle
                                .attr("height", 100) // height of the rectangle
                                .attr("fill", "blue") // fill color of the rectangle using the gradient
                                .attr("stroke", "black")
                                .attr("stroke-width", "3")

                            svg.append("text")
                                .attr("x", 272)
                                .attr("y", 175)
                                .attr("font-size", "58")
                                .attr("fill", "Black")
                                .attr("text-anchor", "end")
                                .text(("Low Abundance Indicator Organism"))

                            // Append a rectangle to the SVG container and apply the gradient
                            svg.append("rect")
                                .attr("x", 282)    // x position of the rectangle
                                .attr("y", 300)    // y position of the rectangle
                                .attr("width", 400) // width of the rectangle
                                .attr("height", 100) // height of the rectangle
                                .attr("fill", "white") // fill color of the rectangle using the gradient
                                .attr("stroke", "black")
                                .attr("stroke-width", "3")

                            svg.append("text")
                                .attr("x", 272)
                                .attr("y", 375)
                                .attr("font-size", "58")
                                .attr("fill", "Black")
                                .attr("text-anchor", "end")
                                .text(("Non-Indicator Organism"))
                    }
                    else{
                        svg.append("text")
                        .attr("x", -182)
                        .attr("y", -455)
                        .attr("font-size", "58")
                        .attr("fill", "Black")
                        .text("All Organisms Heatmap")

                        const gradient = svg.append("defs")
                            .append("linearGradient")
                            .attr("id", "gradient")
                            .attr("x1", "0%")
                            .attr("y1", "0%")
                            .attr("x2", "100%")
                            .attr("y2", "0%");

                        gradient.append("stop")
                            .attr("offset", "0%")
                            .attr("stop-color", "#0200b9")
                            .attr("stop-opacity", 1);
            
                        gradient.append("stop")
                                .attr("offset", "100%")
                                .attr("stop-color", "#00fff3")
                                .attr("stop-opacity", 1);
                
                        // Append a rectangle to the SVG container and apply the gradient
                        svg.append("rect")
                        .attr("x", 82)    // x position of the rectangle
                        .attr("y", -350)    // y position of the rectangle
                        .attr("width", 400) // width of the rectangle
                        .attr("height", 100) // height of the rectangle
                        .attr("fill", "url(#gradient)") // fill color of the rectangle using the gradient
                        .attr("stroke", "black")
                        .attr("stroke-width", "1")

                        svg.append("text")
                        .attr("x", 82)
                        .attr("y", -200)
                        .attr("font-size", "58")
                        .attr("fill", "Black")
                        .text("0")

                        svg.append("text")
                        .attr("x", 482)
                        .attr("y", -200)
                        .attr("font-size", "58")
                        .attr("fill", "Black")
                        .attr("text-anchor", "end")
                        .text((sliderMin*100).toFixed(0))

                        svg.append("text")
                        .attr("x", 72)
                        .attr("y", -275)
                        .attr("font-size", "58")
                        .attr("fill", "Black")
                        .attr("text-anchor", "end")
                        .text(("Low Abundance of Organism"))
                
                        // Append a rectangle to the SVG container and apply the gradient
                        svg.append("rect")
                            .attr("x", 82)    // x position of the rectangle
                            .attr("y", -100)    // y position of the rectangle
                            .attr("width", 400) // width of the rectangle
                            .attr("height", 100) // height of the rectangle
                            .attr("fill", "purple") // fill color of the rectangle using the gradient
                            .attr("stroke", "black")
                        .attr("stroke-width", "1")

                        svg.append("text")
                        .attr("x", 82)
                        .attr("y", 50)
                        .attr("font-size", "58")
                        .attr("fill", "Black")
                        .text((sliderMin*100).toFixed(0))

                        svg.append("text")
                        .attr("x", 482)
                        .attr("y", 50)
                        .attr("font-size", "58")
                        .attr("fill", "Black")
                        .attr("text-anchor", "end")
                        .text((sliderMax*100).toFixed(0))

                        svg.append("text")
                        .attr("x", 72)
                        .attr("y", -25)
                        .attr("font-size", "58")
                        .attr("fill", "Black")
                        .attr("text-anchor", "end")
                        .text(("Normal Abundance of Organism"))


                        const gradient3 = svg.append("defs")
                            .append("linearGradient")
                            .attr("id", "gradient3")
                            .attr("x1", "0%")
                            .attr("y1", "0%")
                            .attr("x2", "100%")
                            .attr("y2", "0%");
    
                        gradient3.append("stop")
                                .attr("offset", "0%")
                                .attr("stop-color", "#ff0000")
                                .attr("stop-opacity", 1);
                
                        gradient3.append("stop")
                                .attr("offset", "100%")
                                .attr("stop-color", "#7b0000")
                                .attr("stop-opacity", 1);
                
                        // Append a rectangle to the SVG container and apply the gradient
                        svg.append("rect")
                            .attr("x", 82)    // x position of the rectangle
                            .attr("y", 150)    // y position of the rectangle
                            .attr("width", 400) // width of the rectangle
                            .attr("height", 100) // height of the rectangle
                            .attr("fill", "url(#gradient3)") // fill color of the rectangle using the gradient
                            .attr("stroke", "black")
                            .attr("stroke-width", "1")

                        svg.append("text")
                            .attr("x", 82)
                            .attr("y", 300)
                            .attr("font-size", "58")
                            .attr("fill", "Black")
                            .text((sliderMax*100).toFixed(0))
    
                        svg.append("text")
                            .attr("x", 482)
                            .attr("y", 300)
                            .attr("font-size", "58")
                            .attr("fill", "Black")
                            .attr("text-anchor", "end")
                            .text("100")

                        svg.append("text")
                            .attr("x", 72)
                            .attr("y", 225)
                            .attr("font-size", "58")
                            .attr("fill", "Black")
                            .attr("text-anchor", "end")
                            .text(("High Abundance of Organism"))

                        
                        svg.append("rect")
                            .attr("x", 82)    // x position of the rectangle
                            .attr("y", 400)    // y position of the rectangle
                            .attr("width", 400) // width of the rectangle
                            .attr("height", 100) // height of the rectangle
                            .attr("fill", "white") // fill color of the rectangle using the gradient
                            .attr("stroke", "black")
                            .attr("stroke-width", "1")

                        svg.append("text")
                            .attr("x", 72)
                            .attr("y", 475)
                            .attr("font-size", "58")
                            .attr("fill", "Black")
                            .attr("text-anchor", "end")
                            .text("Organism Absent")
                    }
                }
                else{
                    svg.append("text")
                    .attr("x", -352)
                    .attr("y", -565)
                    .attr("font-size", "58")
                    .attr("fill", "black")
                    .text(word)
                }
                
                let partition = d3.partition()
                    .size([2 * Math.PI, radius]);
    
                let hierarchy
                if (index === 0){
                    hierarchy = d3.hierarchy(data)
                    .sum(function(d) { 
                        return d.value; 
                    })
                    .sort(function(a, b) { return b.value - a.value; });
                }
                else{
                    hierarchy = d3.hierarchy(mainData)
                    .sum(function(d) { 
                        // console.log(d.value)
                        return d.value; 
                    })
                    .sort(function(a, b) { return b.value - a.value; });
    
                    // console.log(hierarchy)
                }
    
                let root = partition(hierarchy);
                console.log(root)
    
                function calculateLeafDescendantsAndNames(node, namesArray, namesArray2, namesArray3, namesArray4) {
                    if (!node.children || node.children.length === 0) {
                        node.totalLeafDescendants = 1; // Leaf node has 1 leaf descendant (itself)

                        let myVal = node.data.name
                        let myNames = myVal.split('?')
                        node.nameFound = namesArray.includes(myNames[2]) ? 1 : 0; // Check if the leaf node's name is in the names array
                        // node.positiveInd = namesArray2.includes(myNames[2]) ? 1 : 0; // Check if the leaf node's name is in the names array
                        // node.negativeInd = namesArray3.includes(myNames[2]) ? 1 : 0; // Check if the leaf node's name is in the names array
                        node.nameFoundTotal = (foundObject = namesArray4.find(obj => obj.hasOwnProperty(myNames[2]))) ? foundObject[myNames[2]] : 0
                    } 
                    else {
                        node.totalLeafDescendants = node.children.reduce(function(sum, child) {
                            return sum + calculateLeafDescendantsAndNames(child, namesArray, namesArray2, namesArray3, namesArray4);
                        }, 0);

                        let myVal = node.data.name
                        let myNames = myVal.split('__')
                        node.nameFound = node.children.reduce(function(sum, child) {
                            return sum + child.nameFound;
                        }, namesArray.includes(myNames[2]) ? 1 : 0); // Add 1 if the node's own name is in the names array
                        // node.positiveInd = node.children.reduce(function(sum, child) {
                        //     return sum + child.positiveInd;
                        // }, namesArray2.includes(myNames[2]) ? 1 : 0); // Add 1 if the node's own name is in the names array
                        // node.negativeInd = node.children.reduce(function(sum, child) {
                        //     return sum + child.negativeInd;
                        // }, namesArray3.includes(myNames[2]) ? 1 : 0); // Add 1 if the node's own name is in the names array
                        node.nameFoundTotal = node.children.reduce(function(sum, child) {
                            return sum + child.nameFoundTotal;
                        }, (foundObject = namesArray4.find(obj => obj.hasOwnProperty(myNames[2]))) ? foundObject[myNames[2]] : 0); // Add 1 if the node's own name is in the names array
                    }
                    return node.totalLeafDescendants;
                }
    
                // Calculate leaf descendants for each node starting from the root
                let myArray = []
                let myArray2 = []
                let myArray3 = []
                let myArray4 = []


                for (let i = 0; i < csvData.length; i++) {
                    const obj = csvData[i];
                    for (const key in obj) {
                      if (obj.hasOwnProperty(key)) {
                        if (key !== "Collection" && key !== "Name"){
                            // console.log(obj[key])
                            let myVal = obj[key]

                            const firstCloseBracketIndex = myVal.indexOf('[')
                            const firstOpenParenIndex = myVal.indexOf(']');
                            const result = myVal.substring(firstCloseBracketIndex+1, firstOpenParenIndex).trim();

                            let match3 = myVal.match(/\((-?\d+(?:\.\d+)?)\)/);
                            let number2 = match3 ? match3[1] : null;
                            
                            
                            if (result !== ''){
                                let bool = /^\d+$/.test(result);
                                if (bool){
                                    // let myNumber = parseInt(result)
                                    if (myArray.includes(result)){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty(result)){
                                                obj[result] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push(result)
                                        if (parseFloat(number2) > 0){
                                            myArray2.push(result)
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push(result)
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push(result)
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push(result)
                                            }
                                            // console.log(number2.length)
                                        }
                                        let keyValuePair = {}
                                        keyValuePair[result] = 1
                                        myArray4.push(keyValuePair)
                                    }

                                    
                                    // else{
                                    //     console.log('no')
                                    // }
                                }
                                else{
                                    // console.log(myVal)
                                    // // counter2 += 1
                                    const firstStop = myVal.indexOf(']')
                                    const secondStop = myVal.indexOf('(');
                                    const result2 = myVal.substring(firstStop+1, secondStop).trim();

                                    let match3 = myVal.match(/\((-?\d+(?:\.\d+)?)\)/);
                                    let number2 = match3 ? match3[1] : null;


                                    if (result2 === 'Shigella'){
                                        if (myArray.includes('620')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('620')){
                                                    obj['620'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('620')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('620')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('620')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('620')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('620')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['620'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Akkermansia muciniphila'){
                                        if (myArray.includes('239935')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('239935')){
                                                    obj['239935'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('239935')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('239935')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('239935')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('239935')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('239935')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['239935'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Bifidobacterium bifidum'){
                                        if (myArray.includes('1681')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('1681')){
                                                    obj['1681'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('1681')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('1681')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('1681')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('1681')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('1681')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['1681'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Bifidobacterium breve'){
                                        if (myArray.includes('1685')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('1685')){
                                                    obj['1685'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('1685')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('1685')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('1685')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('1685')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('1685')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['1685'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Bifidobacterium longum subsp. infantis'){
                                        if (myArray.includes('1682')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('1682')){
                                                    obj['1682'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('1682')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('1682')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('1682')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('1682')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('1682')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['1682'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Bifidobacterium longum'){
                                        if (myArray.includes('216816')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('216816')){
                                                    obj['216816'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('216816')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('216816')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('216816')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('216816')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('216816')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['216816'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Bifidobacterium animalis'){
                                        if (myArray.includes('28025')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('28025')){
                                                    obj['28025'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('28025')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('28025')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('28025')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('28025')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('28025')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['28025'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Lactobacillus acidophilus'){
                                        if (myArray.includes('1579')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('1579')){
                                                    obj['1579'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('1579')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('1579')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('1579')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('1579')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('1579')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['1579'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Levilactobacillus brevis'){
                                        if (myArray.includes('1580')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('1580')){
                                                    obj['1580'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('1580')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('1580')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('1580')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('1580')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('1580')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['1580'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Pediococcus acidilactici'){
                                        if (myArray.includes('1254')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('1254')){
                                                    obj['1254'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('1254')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('1254')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('1254')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('1254')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('1254')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['1254'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Bifidobacterium animalis subsp. lactis Bl-04'){
                                        if (myArray.includes('580050')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('580050')){
                                                    obj['580050'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('580050')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('580050')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('580050')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('580050')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('580050')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['580050'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Ligilactobacillus salivarius'){
                                        if (myArray.includes('1624')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('1624')){
                                                    obj['1624'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('1624')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('1624')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('1624')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('1624')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('1624')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['1624'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Streptococcus salivarius'){
                                        if (myArray.includes('1304')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('1304')){
                                                    obj['1304'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('1304')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('1304')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('1304')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('1304')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('1304')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['1304'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Campylobacter'){
                                        if (myArray.includes('194')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('194')){
                                                    obj['194'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('194')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('194')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('194')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('194')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('194')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['194'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Clostridioides difficile'){
                                        if (myArray.includes('1496')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('1496')){
                                                    obj['1496'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('1496')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('1496')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('1496')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('1496')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('1496')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['1496'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Latilactobacillus sakei'){
                                        if (myArray.includes('1599')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('1599')){
                                                    obj['1599'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('1599')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('1599')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('1599')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('1599')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('1599')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['1599'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Lactobacillus gasseri'){
                                        if (myArray.includes('1596')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('1596')){
                                                    obj['1596'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('1596')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('1596')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('1596')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('1596')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('1596')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['1596'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Klebsiella oxytoca'){
                                        if (myArray.includes('571')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('571')){
                                                    obj['571'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('571')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('571')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('571')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('571')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('571')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['571'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Lacticaseibacillus paracasei'){
                                        if (myArray.includes('1597')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('1597')){
                                                    obj['1597'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('1597')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('1597')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('1597')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('1597')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('1597')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['1597'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Lactiplantibacillus plantarum'){
                                        if (myArray.includes('1590')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('1590')){
                                                    obj['1590'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('1590')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('1590')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('1590')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('1590')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('1590')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['1590'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Streptococcus thermophilus'){
                                        if (myArray.includes('1308')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('1308')){
                                                    obj['1308'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('1308')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('1308')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('1308')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('1308')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('1308')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['1308'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Lactobacillus crispatus'){
                                        if (myArray.includes('47770')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('47770')){
                                                    obj['47770'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('47770')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('47770')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('47770')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('47770')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('47770')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['47770'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Bacillus subtilis'){
                                        if (myArray.includes('1423')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('1423')){
                                                    obj['1423'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('1423')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('1423')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('1423')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('1423')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('1423')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['1423'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Clostridium perfringens'){
                                        if (myArray.includes('1502')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('1502')){
                                                    obj['1502'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('1502')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('1502')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('1502')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('1502')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('1502')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['1502'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Staphylococcus aureus'){
                                        if (myArray.includes('1280')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('1280')){
                                                    obj['1280'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('1280')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('1280')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('1280')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('1280')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('1280')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['1280'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Lactococcus lactis'){
                                        if (myArray.includes('1358')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('1358')){
                                                    obj['1358'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('1358')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('1358')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('1358')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('1358')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('1358')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['1358'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Vibrio cholerae'){
                                        if (myArray.includes('666')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('666')){
                                                    obj['666'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('666')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('666')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('666')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('666')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('666')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['666'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Yersinia enterocolitica'){
                                        if (myArray.includes('630')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('630')){
                                                    obj['630'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('630')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('630')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('630')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('630')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('630')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['630'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    else if (result2 === 'Salmonella enterica'){
                                        if (myArray.includes('28901')){
                                            for (let obj of myArray4) {
                                                if (obj.hasOwnProperty('28901')){
                                                    obj['28901'] += 1
                                                }
                                            }
                                        }
                                        else{
                                            myArray.push('28901')
                                            if (parseFloat(number2) > 0){
                                                myArray2.push('28901')
                                            }
                                            else if (parseFloat(number2) < 0){
                                                myArray3.push('28901')
                                            }
                                            if (parseFloat(number2) === 0){
                                                if (number2.length === 3){
                                                    myArray2.push('28901')
                                                }
                                                else if (number2.length === 4){
                                                    myArray3.push('28901')
                                                }
                                                // console.log(number2.length)
                                            }
                                            let keyValuePair = {}
                                            keyValuePair['28901'] = 1
                                            myArray4.push(keyValuePair)
                                        }
                                    }
                                    // else{
                                    //     console.log(result2)
                                    // }
                                }
                            }
                        }
                      }
                    }
                }

                calculateLeafDescendantsAndNames(root, myArray, myArray2, myArray3, myArray4);

                function findMaxValueNodeAtDepth1(root, key) {
                    let maxValueNode = null;
                    let maxValue = -Infinity;
                  
                    // Traverse the hierarchy to find the node at depth = 1 with the maximum value for the given key
                    root.each(node => {
                      if (node.depth === 1 && node[key] > maxValue) {
                        maxValueNode = node;
                        maxValue = node[key];
                      }
                    });
                  
                    return maxValueNode.data.name;
                }
                
                let maxNodeName = findMaxValueNodeAtDepth1(root, 'nameFoundTotal');

                // function isDescendantOfFirstNodeAtDepthOne(node, maxNodeName){
                //     if (node.data.name === maxNodeName){
                //         // console.log('yes')
                //         return true
                //     }
                //     else{
                //         // console.log('no')
                //     }
                //     let parent = node.parent
                //     while (parent){
                //         if (parent.data.name === maxNodeName){
                //             // console.log(parent.data.name)
                //             return true
                //         }
                //         parent = parent.parent
                //     }
                //     return false
                // }


                function sortHierarchy(node, maxNodeName) {
                    // console.log(maxNodeName)
                    if (node.children) {               
                        // // if (node.depth >= 1){
                        //     // if (isDescendantOfFirstNodeAtDepthOne(node, maxNodeName)){
                        //     //     node.children.sort((a, b) => a.nameFound - b.nameFound);
                        //     // }
                        //     // else{
                        // //         node.children.sort((a, b) => b.nameFound - a.nameFound);
                        // //     }
                        // // }
                        // // else{
                        // node.children.sort((a, b) => b.nameFound - a.nameFound);
                        // // }
                        // node.children.forEach(child => sortHierarchy(child, maxNodeName));


                        node.children.sort((a, b) => b.nameFoundTotal - a.nameFoundTotal);
                        // }
                        node.children.forEach(child => sortHierarchy(child, maxNodeName));
                    }
                }

                sortHierarchy(root, maxNodeName);

                // console.log(root)
    
    
                root.each(function(d) {
                    if (d.children) {
                        // Calculate the total number of leaf descendants for all children
                        var totalLeafDescendants = d.children.reduce(function(sum, child) {
                            return sum + child.totalLeafDescendants;
                        }, 0);
    
                        // Iterate over the children and assign size proportional to their leaf descendants count
                        var currentAngle = d.x0;
                        d.children.forEach(function(child) {
                            var childWeight = child.totalLeafDescendants;
                            var angleRange = (childWeight / totalLeafDescendants) * (d.x1 - d.x0);
    
                            // Calculate the start and end angle for the child
                            child.x0 = currentAngle;
                            child.x1 = currentAngle + angleRange;
    
                            // Update the current angle
                            currentAngle += angleRange;
                        });
                    }
                });
    
                let givenDataRoot
                if (index !== 0){
                    givenDataRoot = d3.hierarchy(data).sum(function(d) { 
                        return d.value; 
                    })
                    .sort(function(a, b) { return b.value - a.value; });
                }


                let checkedLevels = []
                const checkboxes = document.querySelectorAll('input[type="checkbox"]');
                checkboxes.forEach(function(checkbox) {
                    if (checkbox.checked) {
                        checkedLevels.push(parseInt(checkbox.id))
                    }
                });
    
                let arc = d3.arc()
                            .startAngle(function(d) { 
                                return d.x0; 
                            })
                            .endAngle(function(d) { 
                                return d.x1; 
                            })
                            .innerRadius(function(d) { 
                                let val = innerRadius(d, index, checkedLevels);
                                return val; 
                            })
                            .outerRadius(function(d) { 
                                let val = outerRadius(d, index, csvData, checkedLevels);
                                return val; 
                            });
                
    
                // let colorScaleLow = d3.scaleLinear.domain([])
                let colorScaleLow = d3.scaleLinear()
                       .domain([0, sliderMin])
                       .range(["#0200b9", "#00fff3"]);
    
                let colorScaleHigh = d3.scaleLinear()
                .domain([sliderMax, 1])
                .range(["#ff0000", "#7b0000"]);
    
    
                let path
                if (index === 0){
                }
                else{
                    async function preLoadData(){
                        let aggregatedData = await d3.csv("CSVs/initialCSVs/AggregateFiles/"+word+"_aggregate.csv");
                        let agg2Data = await d3.csv("CSVs/CSVswithStandardRanks/"+word+".csv");
                        return [aggregatedData, agg2Data];
                    }
                    // let point35
                    
                    preLoadData().then(aggregatedData => {
                        path = svg.selectAll("path")
                            .data(root.descendants().slice(1))
                            .enter().append("path")
                            .classed("sunburst-path", true) // Add a class to each path
                            .attr("id", (d, i) => "path-" + d.data.name + "-" + index) // Add a unique ID to each path
                            .attr("d", arc)
                            .style("fill", function(d) { 
                                    let nodeName = d.data.name
                                    let lastIndex = nodeName.lastIndexOf('__')
                                    let taxonID = nodeName.substring(lastIndex + 2)
                                    //part 1
                                    if (indicatorValue !== 'ao'){
                                        let myWeight = findTaxonWeightbyID(transformedData, taxonID)
                                        if (myWeight === null){
                                            return "white"
                                        }
                                        else{
                                            let cdf = findTaxonCDFbyID(aggregatedData[0], taxonID)

                                            if (cdf === null){
                                                return "white"
                                            }
                                            else{
                                                if (myWeight > 0){
                                                    return "red"
                                                }
                                                else{
                                                    return "blue"
                                                }
                                            }
                                        }
                                    }
                                    //part 2    
                                    else{
                                        let cdf = findTaxonCDFbyID(aggregatedData[0], taxonID)
                                        // console.log(cdf)
                                        if (cdf === null){
                                            // console.log('yes')
                                            return "white"
                                        }
                                        else{

                                            // console.log(taxonID)
                                            // console.log(cdf)
                                            if (cdf < 0){
                                                return colorScaleLow(0)
                                            }
                                            else if (cdf >= 0 && cdf < sliderMin){
                                                return colorScaleLow(cdf)
                                            }
                                            else if (cdf >= sliderMax && cdf <= 1){
                                                return colorScaleHigh(cdf)
                                            }
                                            else if (cdf > 1){
                                                return colorScaleHigh(1)
                                            }
                                            else{
                                                return "purple"
                                            }
                                        }
                                    } 
                            })
                            .style("stroke", function(d){
                                let nodeName = d.data.name
                                let lastIndex = nodeName.lastIndexOf('__')
                                let taxonID = nodeName.substring(lastIndex + 2)

                                // if (d.data.hasOwnProperty('children')){
                                //     let lastIndex = nodeName.lastIndexOf('__')
                                //     taxonID = nodeName.substring(lastIndex + 2)
                                // }
                                // else{
                                //     let lastIndex = nodeName.lastIndexOf('?')
                                //     taxonID = nodeName.substring(lastIndex + 1)
                                // }

                                //part 1
                                if (indicatorValue !== 'ao'){
                                    let myWeight = findTaxonWeightbyID(transformedData, taxonID)
                                    if (myWeight === null){
                                        return "grey"
                                    }
                                    else{
                                        let cdf = findTaxonCDFbyID(aggregatedData[0], taxonID)
                                        if (cdf === null){
                                            return "grey"
                                        }
                                        else{
                                            return "black"
                                        }
                                    }
                                }
                                //part 2    
                                else{
                                    let cdf = findTaxonCDFbyID(aggregatedData[0], taxonID)
                                    // console.log(cdf)
                                    if (cdf === null){
                                        // console.log('yes')
                                        return "grey"
                                    }
                                    else{
                                        return "black"
                                    }
                                } 
                            })
                            .style("opacity", function(d){
                                let nodeName = d.data.name
                                let lastIndex = nodeName.lastIndexOf('__')
                                let taxonID = nodeName.substring(lastIndex + 2)


                                // if (d.data.hasOwnProperty('children')){
                                //     let lastIndex = nodeName.lastIndexOf('__')
                                //     taxonID = nodeName.substring(lastIndex + 2)
                                // }
                                // else{
                                //     let lastIndex = nodeName.lastIndexOf('?')
                                //     taxonID = nodeName.substring(lastIndex + 1)
                                // }


                                 //part 1
                                 if (indicatorValue !== 'ao'){
                                    let myWeight = findTaxonWeightbyID(transformedData, taxonID)
                                    if (myWeight === null){
                                        return "0.1"
                                    }
                                    else{
                                        let cdf = findTaxonCDFbyID(aggregatedData[0], taxonID)
                                        if (cdf === null){
                                            return "0.1"
                                        }
                                        else{
                                            return "1"
                                        }
                                    }
                                }
                                //part 2    
                                else{
                                    let cdf = findTaxonCDFbyID(aggregatedData[0], taxonID)
                                    // console.log(cdf)
                                    if (cdf === null){
                                        // console.log('yes')
                                        return "0.1"
                                    }
                                    else{
                                        return "1"
                                    }
                                } 


                                // console.log(taxonID)
                                
                                // return "1"
                            }) 
                            .style("stroke-width", function(d){
                                if (d.depth === 1){
                                    return "0.5"
                                }
                                else if (d.depth >= 6){
                                    return "0.1"
                                }
                                else{
                                    return "0.2"
                                }
                            })
                            .on("mouseover", function (event, d){
                                let nodeName = d.data.name
                                handleMouseOver(event, index, d, givenDataRoot, nodeName, aggregatedData[0])
                            })
                            .on("mouseout", mouseout);


                            d3.selectAll(".sunburst-path").each(function(d, i) {
                                var element = d3.select(this);
                                element.attr("original-stroke", element.style("stroke"));
                                element.attr("original-stroke-width", element.style("stroke-width"));
                            });
                    })
    
                    
                }
    
            })(i);
        }
    })();
}



function renderSlider(){
    let sliderSVG = d3.select('.slider').append("svg")
                    .attr("width", 1150)
                    .attr("height", 200)
                    .append("g")
                    .attr("transform", "translate(" + 0 + "," + 0 + ")");

    const x = d3.scaleLinear()
        .domain([0, 100])
        .range([100, 1050])
        .clamp(true);

    sliderSVG.append('text')
        .attr('class', 'slider-value')
        .attr('text-anchor', 'middle')
        .attr('transform', `translate(${x(35)}, ${160})`)
        .attr("font-size", "48")
        .text("35");

    sliderSVG.append('text')
        .attr('class', 'slider-value')
        .attr('text-anchor', 'middle')
        .attr('transform', `translate(${x(65)}, ${160})`)
        .attr("font-size", "48")
        .text("65");

    const slider = sliderSVG.append('g')
        .attr('class', 'slider')
        .attr('transform', `translate(0, ${100})`);

    slider.append('line')
        .attr('class', 'track')
        .attr('id', 'line1')
        .attr('x1', x.range()[0])
        .attr('x2', x.range()[1]);

    slider.append('line')
        .attr('class', 'track-inset')
        .attr('x1', x.range()[0])
        .attr('x2', x.range()[1]);

    slider.append('line')
        .attr('class', 'track-overlay')
        .attr('x1', x.range()[0])
        .attr('x2', x.range()[1])
        .call(d3.drag()
            .on('start.interrupt', () => slider.interrupt())
            .on('start drag', function(event) {
                const xPos = x.invert(event.x);
                if (draggingMin) {
                    minValue = Math.min(xPos, maxValue);
                    handleMin.attr('cx', x(minValue));
                } else {
                    maxValue = Math.max(xPos, minValue);
                    handleMax.attr('cx', x(maxValue));
                }
                // updateValues();
            })
            .on('end', () => {
                // draggingMin = false;
                updateValues();
            }));


    let minValue = 35;
    let maxValue = 65;
    let draggingMin = true;

    const handleMin = slider.append('circle')
        .attr('class', 'handle')
        .attr('r', 18)
        .attr('id', 'circle1')
        .attr('cx', x(minValue))
        .call(d3.drag()
            .on('start', () => draggingMin = true)
            .on('drag', function(event) {
                minValue = Math.min(x.invert(event.x), maxValue);
                d3.select(this).attr('cx', x(minValue));
            })
            .on('end', () => {
                draggingMin = false;
                updateValues();
            }));

    const handleMax = slider.append('circle')
        .attr('class', 'handle')
        .attr('r', 18)
        .attr('id', 'circle2')
        .attr('cx', x(maxValue))
        .call(d3.drag()
            .on('start', () => draggingMin = false)
            .on('drag', function(event) {
                maxValue = Math.max(x.invert(event.x), minValue);
                d3.select(this).attr('cx', x(maxValue));
            })
            .on('end', () => {
                draggingMin = false;
                updateValues();
            }));

    function updateValues() {
        sliderSVG.selectAll('.slider-value').remove();

        sliderSVG.append('text')
            .attr('class', 'slider-value')
            .attr('text-anchor', 'middle')
            .attr('transform', `translate(${x(minValue)}, ${160})`)
            .attr("font-size", "48")
            .text(minValue.toFixed(2));

        sliderSVG.append('text')
            .attr('class', 'slider-value')
            .attr('text-anchor', 'middle')
            .attr('transform', `translate(${x(maxValue)}, ${160})`)
            .attr("font-size", "48")
            .text(maxValue.toFixed(2));

        // Select all elements with the class 'your-class-name'
        removeExistingContainers()
        rendering(minValue, maxValue, 'ao')
    }
}




function removeExistingContainers(){
    const elements = document.querySelector('.svg-container')
    elements.innerHTML = ''

    const elements2 = document.querySelector('.svg-container-2');
    elements2.innerHTML = ''
    const elements3 = document.querySelector('.svg-container-3');
    elements3.innerHTML = ''
    const elements4 = document.querySelector('.svg-container-4');
    elements4.innerHTML = ''
    const elements5 = document.querySelector('.svg-container-5');
    elements5.innerHTML = ''
    const elements6 = document.querySelector('.svg-container-6');
    elements6.innerHTML = ''
    
    const elements7 = document.querySelector('.svg-container-7');
    elements7.innerHTML = ''
    const elements8 = document.querySelector('.svg-container-8');
    elements8.innerHTML = ''
    const elements9 = document.querySelector('.svg-container-9');
    elements9.innerHTML = ''
    const elements10 = document.querySelector('.svg-container-10');
    elements10.innerHTML = ''
    const elements11 = document.querySelector('.svg-container-11');
    elements11.innerHTML = ''
    const elements12 = document.querySelector('.svg-container-12');
    elements12.innerHTML = ''

    const elements13 = document.querySelector('.svg-container-13');
    elements13.innerHTML = ''
    const elements14 = document.querySelector('.svg-container-14');
    elements14.innerHTML = ''
    const elements15 = document.querySelector('.svg-container-15');
    elements15.innerHTML = ''
    const elements16 = document.querySelector('.svg-container-16');
    elements16.innerHTML = ''
    const elements17 = document.querySelector('.svg-container-17');
    elements17.innerHTML = ''
    const elements18 = document.querySelector('.svg-container-18');
    elements18.innerHTML = ''

    const elements19 = document.querySelector('.svg-container-19');
    elements19.innerHTML = ''
    const elements20 = document.querySelector('.svg-container-20');
    elements20.innerHTML = ''

    const elements21 = document.querySelector('.svg-container-21');
    elements21.innerHTML = ''
    const elements22 = document.querySelector('.svg-container-22');
    elements22.innerHTML = ''
    const elements23 = document.querySelector('.svg-container-23');
    elements23.innerHTML = ''
    const elements24 = document.querySelector('.svg-container-24');
    elements24.innerHTML = ''
    const elements25 = document.querySelector('.svg-container-25');
    elements25.innerHTML = ''

    const elements26 = document.querySelector('.svg-container-26');
    elements26.innerHTML = ''
    const elements27 = document.querySelector('.svg-container-27');
    elements27.innerHTML = ''
    const elements28 = document.querySelector('.svg-container-28');
    elements28.innerHTML = ''
    const elements29 = document.querySelector('.svg-container-29');
    elements29.innerHTML = ''
    const elements30 = document.querySelector('.svg-container-30');
    elements30.innerHTML = ''

    const elements31 = document.querySelector('.svg-container-31');
    elements31.innerHTML = ''
    const elements32 = document.querySelector('.svg-container-32');
    elements32.innerHTML = ''
    const elements33 = document.querySelector('.svg-container-33');
    elements33.innerHTML = ''
    const elements34 = document.querySelector('.svg-container-34');
    elements34.innerHTML = ''
    const elements35 = document.querySelector('.svg-container-35');
    elements35.innerHTML = ''
}


function removeSlider(){
    const elements19 = document.querySelector('.slider')
    elements19.innerHTML = ''
}


function renderCheckboxes(){
    // console.log('here')

    const data = [
        { label: 'Level 1(Phylum)', value: '1', x: 50, y: 50},
        { label: 'Level 2(Class)', value: '2', x: 500, y: 50},
        { label: 'Level 3(Order)', value: '3', x: 900, y: 50 },
        { label: 'Level 4(Family)', value: '4', x: 1300, y: 50},
        { label: 'Level 5(Genus)', value: '5', x: 50, y: 120},
        { label: 'Level 6(Species)', value: '6', x: 500, y: 120},
        { label: 'Level 7(Strain)', value: '7', x: 950, y: 120}
    ];

    // Select the container where the checkboxes will be appended
    const container = d3.select('#checkboxes');

    // Create a checkbox for each data item with specified coordinates
    container.selectAll('div')
        .data(data)
        .enter()
        .append('div')
        .attr('class', 'checkbox-container')
        .style('left', d => `${d.x}px`)
        .style('top', d => `${d.y}px`)
        .each(function(d) {
            // Append the checkbox input
            d3.select(this)
                .append('input')
                .attr('type', 'checkbox')
                .attr('id', d.value)
                .attr('value', d.value)
                .attr('checked', true)  // Set the checkbox to be checked by default
                .on('change', function() {
                    // Call a function whenever the checkbox is clicked
                    checkboxClicked(d.value, this.checked);
                });

            // Append the label
            d3.select(this)
                .append('label')
                .attr('for', d.value)
                .text(d.label);
        });
}


function checkboxClicked(value, isChecked) {
    let activeTab = document.querySelector('.tab.active');
    console.log(activeTab.textContent);

    if (activeTab.textContent === 'All Organisms Heatmap'){
        let circle1 = document.getElementById('circle1');
        let cxValue1 = parseFloat(circle1.getAttribute('cx'))
        let circle2 = document.getElementById('circle2');
        let cxValue2 = parseFloat(circle2.getAttribute('cx'))
    
        let line1 = document.getElementById('line1');
        let linex1 = parseFloat(line1.getAttribute('x1'))
        let linex2 = parseFloat(line1.getAttribute('x2'))
    
        cxValue1 = (((cxValue1 - linex1)/(linex2 - linex1)) * 100).toFixed(2)
        cxValue2 = (((cxValue2 - linex1)/(linex2 - linex1)) * 100).toFixed(2)
        removeExistingContainers()
        rendering(cxValue1, cxValue2, 'ao')
    }
    else if (activeTab.textContent === 'Diarrhea Indicator Organisms'){
        removeExistingContainers()
        rendering(35, 65, 'dio')
    }
    else if (activeTab.textContent === 'Crohns Indicator Organisms'){
        removeExistingContainers()
        rendering(35, 65, 'cio')
    }
    else if (activeTab.textContent === 'Bowel Cancer Indicator Organisms'){
        removeExistingContainers()
        rendering(35, 65, 'bcio')
    }
    else if (activeTab.textContent === 'Parkinsons Indicator Organisms'){
        removeExistingContainers()
        rendering(35, 65, 'pio')
    }
    else if (activeTab.textContent === 'Cirrhosis Indicator Organisms'){
        removeExistingContainers()
        rendering(35, 65, 'lcio')
    }
}

function removeCheckBoxes(){
    const elements19 = document.getElementById('checkboxes')
    elements19.innerHTML = ''
}



const tabsData = [
    { id: 'tab1', label: 'Diarrhea Indicator Organisms'},
    { id: 'tab2', label: 'All Organisms Heatmap'},
    { id: 'tab3', label: 'Crohns Indicator Organisms'},
    { id: 'tab4', label: 'Bowel Cancer Indicator Organisms'},
    { id: 'tab5', label: 'Parkinsons Indicator Organisms'},
    { id: 'tab6', label: 'Cirrhosis Indicator Organisms'},
];

const tabsContainer = d3.select('#tabs');

tabsData.forEach((tab, i) => {
    // Create tab buttons
    tabsContainer.append('div')
        .attr('class', 'tab')
        .attr('data-tab', tab.id)
        .classed('active', i === 1)  // Set second tab as active
        .text(tab.label)
        .on('click', function() {

            const clickedTab = d3.select(this);

            // Remove active class from all tabs and contents
            d3.selectAll('.tab').classed('active', false);
            d3.selectAll('.tab-content').classed('active', false);

            // Add active class to clicked tab and corresponding content
            clickedTab.classed('active', true);
            d3.select(`#${clickedTab.attr('data-tab')}-content`).classed('active', true);

            let tabValue = clickedTab.attr('data-tab')
            if (tabValue === 'tab1'){
                removeExistingContainers()
                removeSlider()
                // renderSlider()
                removeCheckBoxes()
                renderCheckboxes()
                rendering(35, 65, 'dio')
            }
            else if (tabValue === 'tab2'){
                removeExistingContainers()
                removeSlider()
                renderSlider()
                removeCheckBoxes()
                renderCheckboxes()
                rendering(35, 65, 'ao')
            }
            else if (tabValue === 'tab3'){
                removeExistingContainers()
                removeSlider()
                // renderSlider()
                removeCheckBoxes()
                renderCheckboxes()
                rendering(35, 65, 'cio')
            }   
            else if (tabValue === 'tab4'){
                removeExistingContainers()
                removeSlider()
                // renderSlider()
                removeCheckBoxes()
                renderCheckboxes()
                rendering(35, 65, 'bcio')
            }   
            else if (tabValue === 'tab5'){
                removeExistingContainers()
                removeSlider()
                // renderSlider()
                removeCheckBoxes()
                renderCheckboxes()
                rendering(35, 65, 'pio')
            }  
            else if (tabValue === 'tab6'){
                removeExistingContainers()
                removeSlider()
                // renderSlider()
                removeCheckBoxes()
                renderCheckboxes()
                rendering(35, 65, 'lcio')
            }  
    });
});


renderSlider()
renderCheckboxes()
rendering(35, 65, 'ao')









