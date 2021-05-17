function moreField () {
    'use strict';

    var btnMore = document.querySelector('.form-more'),
        form = document.querySelector('.form-sort'),
        newField,
        count = 10;

    btnMore.addEventListener('click', function () {
        ++count;

        newField = document.createElement('input');
        newField.setAttribute('type', 'text');
        newField.setAttribute('id', 'f-' + count);
        form.insertBefore(newField, btnMore);
    });
}

moreField();


function GetData () {
    'use strict';

    var input = document.getElementsByTagName('input'),
        dataArray = [],
        inputValue = [],
        valueOfNumber,
        i,
        len;

    for (i = 0, len = input.length; len > i; i++) {
        inputValue.push(input[i].value);
        valueOfNumber = inputValue.map(Number);

        dataArray.push({
            valueInput: valueOfNumber[0],
            id: input[i].getAttribute('id')
        });

        inputValue = [];
    }

    this.dataArray = dataArray;
}


/**
 * Sort Methods
 */
GetData.prototype.shellSort = function () {
    'use strict';

    var gap = 1,
        j = 0,
        $this = this,
        dataArray = $this.dataArray,
        afterSortArray = [];

    while (gap < dataArray.length / 3) {
        gap = 3 * gap + 1;
    }
    while (gap > 0) {
        for (var i = gap; i < dataArray.length; i += gap) {
            for (var n = i; n > 0 && dataArray[n].valueInput < dataArray[n-gap].valueInput; n -= gap) {
                var number = dataArray[n].valueInput;

                afterSortArray.push({
                    firstId: document.getElementById(dataArray[n].id),
                    secondId: document.getElementById(dataArray[n-gap].id)
                });

                dataArray[n].valueInput = dataArray[n-gap].valueInput;
                dataArray[n-gap].valueInput = number;
            }
        }
        gap = --gap / 3;
    }


    function showSortSteps () {
        var len = afterSortArray.length,
            firstId,
            secondId,
            firstIdValue,
            secondIdValue;

        setTimeout(function () {

            try {
                firstId = afterSortArray[j].firstId;
            } catch (e) {
                document.body.className = 'shell-body';
            }

            secondId = afterSortArray[j].secondId;

            firstIdValue = firstId.value;
            secondIdValue = secondId.value;

            document.body.className = '';
            firstId.setAttribute('class', 'animated zoomIn');
            secondId.setAttribute('class', 'animated zoomIn');

            setTimeout(function () {
                j++;

                firstId.value = secondIdValue;
                secondId.value = firstIdValue;
            }, 1000);

            if (j < len) {
                setTimeout(function () {
                    firstId.removeAttribute('class');
                    secondId.removeAttribute('class');
                }, 1000);

                showSortSteps();
            }
        }, 3000);
    }

    showSortSteps();
};


window.onload = function () {
    document.querySelector('.btn').onclick = function () {
        //get values of inputs
        var shell = new GetData();

        //apply Shell Sort Method
        shell.shellSort();
    };
};
function generate()
{
  window.location.reload();
 }
  
//  function to disable the button
function disable()
{
  // To disable the button "Generate New Array"
  document.getElementById("Button1").disabled = true;
  document.getElementById("Button1").style.backgroundColor = "#d8b6ff";
  
  // To disable the button "Shell Sort"
  document.getElementById("Button2").disabled = true;
  document.getElementById("Button2").style.backgroundColor = "#d8b6ff";  
}