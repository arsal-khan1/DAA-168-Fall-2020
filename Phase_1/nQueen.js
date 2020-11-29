var taSol1, taSol2, taSol3;
var btnRun;

window.onload = function() {
    console.log("Hooray! Its working");
    taSol1 = document.getElementById('ta_sol1');
    taSol2 = document.getElementById('ta_sol2');
    //taSol3 = document.getElementById('ta_sol3');
    btnRun = document.getElementById('btnRun');
} //end window.onload

function runEmAll(){
    console.log("Running All Solutions")
    taSol1.value = "";  taSol2.value = ""; 
    // taSol3.value = "";
    var start;
    var end;
    var n=4;
    var xArrayBrute = [];
    var yArrayBrute = [];
    var xArrayBackTracking = [];
    var yArrayBackTracking = [];
    for (var k = 4; k <= 16; k++) {
        //Runs each solution and measures performance in microseconds
        console.log("In Forloop: Line 18, k = "+k+"\n");
        start = performance.now();
        sol1(n);
        
        end = performance.now();
        taSol1.value+= ""+n+", "+(end-start)*1000+"\n";
        xArrayBrute.push(n);
        yArrayBrute.push((end - start) * 1000);
        start = performance.now();
        sol2(n);
        end = performance.now();
        taSol2.value+= ""+n+", "+(end-start)*1000+"\n";
        xArrayBackTracking.push(n);
        yArrayBackTracking.push((end - start) * 1000);
        // start = performance.now();
        // sol3(n);
        // end = performance.now();
        // taSol3.value+= ""+n+", "+(end-start)*1000+"\n";
        n = n + 1;  
    }//end for
    ///////////////////////////////////////////////********************Graph For Brute Force***********************////////////////////////////////////////////////////////
    var traceBruteForce = {
        type: 'bar',
        x: xArrayBrute,
        y: yArrayBrute,
        marker: {
            color: '#C8A2C8',
            line: {
                width: 2.5
            }
        }
      };
      
      var dataBruteForce = [ traceBruteForce ];
      
      var layoutBruteForce = { 
        title: 'Brute Force Algorithm',
        font: {size: 11}
      };
      
      var configBruteForce = {responsive: true}
      
      Plotly.newPlot('bruteForce', dataBruteForce, layoutBruteForce, configBruteForce );
    ///////////////////////////////////////////////********************Graph For Brute Force***********************////////////////////////////////////////////////////////

    ///////////////////////////////////////////////********************Graph For BackTracking***********************////////////////////////////////////////////////////////
    var traceBackTracking = {
        type: 'bar',
        x: xArrayBackTracking,
        y: yArrayBackTracking,
        marker: {
            color: '#C8A2C8',
            line: {
                width: 2.5
            }
        }
      };
      
      var dataBackTracking = [ traceBackTracking ];
      
      var layoutBackTracking = { 
        title: 'Back Tracking Algorithm',
        font: {size: 11}
      };
      
      var configBackTracking = {responsive: true}
      
      Plotly.newPlot('backTracking', dataBackTracking, layoutBackTracking , configBackTracking );

    ///////////////////////////////////////////////********************Graph For BackTracking***********************////////////////////////////////////////////////////////


    
}//end runEmAll

function sol1(n){
    var i = 0;
    var columns=[];
    //Implement your brute-force solution here
    queens(columns, i, n)
}

      
function sol2(n){
    //Implement your recursive back-tracking solution here
    var board = generateBoard(n);
    recurseNQ(board, 0);
   }
    
// function sol3(n){
//     //Implement your dynammic programming solution here

//     //--This is garbage code: Remove this--//
//     for (var i = 1; i <= n; i++) {
//         for(var k=0;k<50;k++);
//     }//end for j
//     //--End of Garbage Code--//

//     //Mention reference where you got the solution
//     //Ref: http://
//     //Ref: If you found any paper
// }//end sol3
/////////////////////////////////// ***************   BackTracking  *************** //////////////////////////////////////////////////////
function isSafe(board, row, col,n){
     
     // Checks the ← direction
     for(var i=0; i<col; i++){
       if (board[row][i] === 1) {
         return false;
       }
     }
   
     // Checks the ↖ direction 
     for(var i=row, j=col; i>=0 && j>=0; i--, j--){
       if (board[i][j] === 1) {
         return false;
       }
     }
   
     // Checks the ↙ direction 
     for(var i=row, j=col; j>=0 && i<n; i++, j--){
       if (board[i][j] === 1){
         return false;
       }
     }
   
     return true;
     
   }
   function recurseNQ(board, col,n){
      
     if(col===n){
         //document.writeln(board); // <-- print another solution when n==8
       return;  
     }
   
     for(var i=0; i<n; i++){
       if(isSafe(board, i, col,n)){
         board[i][col]=1;
   
         recurseNQ(board, col+1,n);
         //if(recurseNQ(board, col+1)===true) //<-- you don't need this
             // return true;
   
         board[i][col]=0;
       }
     }
     return false;
   }
   function generateBoard(n){
     var board=[];
     for(var i=0; i<n; i++){
       board[i]=[];
       for(var j=0; j<n; j++){
         board[i][j]=0;
       }
     }
     return board;
   }
/////////////////////////////////// ***************   End Of BackTracking Method *************** ////////////////////////////////////////
/////////////////////////////////// ***************   Brute Force  *************** //////////////////////////////////////////////////////
   function noConflicts(columns, i) {
    for (var j=0; j<i; j++) {
        // same row
        if (columns[j] === columns[i]) {
            return false;
        }
        //document.writeln(columns)
        // diagonal
        if (i-j === Math.abs(columns[j]-columns[i])) {
            return false;
        }
    }
    return true;
}

// recursively solves the n-queens problem by brute force
function queens(columns, i, n) {
    // we have a complete solution
    if (i === n) {
        return columns;
    }
    
    // try placing the next queen on every row
    for (var j=0; j<n; j++) {
        columns[i] = j;
        if (noConflicts(columns, i)) {
            var solution = queens(columns, i+1, n);
            if (solution) {
                //document.writeln(solution);
                return solution;
            }
        }
    }
    //columns.pop();
    
    return false;
}

// returns an array that records the queens' position in each column
// or false if no solution is found
solution = queens([], 0, 8);
/////////////////////////////////// ***************   End Of Brute Force *************** ////////////////////////////////////////