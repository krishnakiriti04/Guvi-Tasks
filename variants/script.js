 jsonArray = [];

 variantsArray = [];

 fieldset = document.getElementById('variants');

 function addVariant() {
     inputbox = document.createElement('input');
     inputbox.type = 'text';
     inputbox.setAttribute('class', 'form-control col-4')
     inputbox.placeholder = "Variant Type";
     var br2 = document.createElement('br');
     boxvalues = document.createElement('input');
     boxvalues.type = 'text';
     boxvalues.setAttribute('class', 'form-control col-4')
     boxvalues.placeholder = "Variant values";
     var hr = document.createElement('hr');
     variantsArray.push(inputbox, boxvalues);
     fieldset.append(inputbox, br2, boxvalues, hr);
 }


 function getVariantDetails() {

     var object1 = {};
     var subArray1 = [];
     var detailsArray = [];
     object1['productName'] = document.getElementById('productName').value;
     object1['basePrice'] = document.getElementById('basePrice').value;
     object1['image'] = document.getElementById('url').value;
     object1['description'] = document.getElementById('description').value;

     for (let i = 0; i < (variantsArray.length); i = i + 2) {
         var obj = {};
         obj['type'] = variantsArray[i].value;
         obj['values'] = variantsArray[i + 1].value.split(",");
         subArray1.push(obj);
     }

     object1['variants'] = subArray1;

     var result = generateJSON();

     for (let i = 0; i < result.length; i++) {
         var obj = {};
         obj['size'] = result[i][0];
         obj['Material'] = result[i][1];
         obj['color'] = result[i][2];
         obj['addOnPrice'] = 30;
         detailsArray.push(obj);
     }
     object1['variantDetails'] = detailsArray;

     jsonArray.push(object1);
     console.log(jsonArray);

 }

 function generateJSON() {

     var arrAllValues = [];
     var arr = [];
     var varArr = [...variantsArray];
     for (let i = 0; i < varArr.length; i++) {
         arrAllValues.push(varArr[i].value);
         if (i % 2 !== 0) {
             arr.push(varArr[i].value.split(","));
         }
     }

     var res = combinations(...arr)

     function combinations(...args) {
         var r = [],
             max = args.length - 1;

         function helper(arr, i) {
             for (var j = 0, l = args[i].length; j < l; j++) {
                 var a = arr.slice(0); // clone arr
                 a.push(args[i][j]);
                 if (i == max)
                     r.push(a);
                 else
                     helper(a, i + 1);
             }
         }
         helper([], 0);
         return r;
     }

     return res;

 }