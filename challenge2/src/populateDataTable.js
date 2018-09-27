export default (function (window) {
    var $dataTable = document.getElementById('rates-data-table');

    function appendToTable(el) {
        $dataTable.innerHTML += el;
    }

    function compareRatesByApy(a, b) {
        if (a.apy > b.apy) {
            return -1;
        }

        if (a.apy < b.apy) {
            return 1;
        }

        if (a.apy === b.apy) {
            return 0;
        }
    }

    function createTableBody(el, classNames) {
        classNames = (classNames) ? classNames : "";          
        return "<tbody class='" + classNames + "'>" + el + "</tbody>";
    }

    function createTableCol(el, classNames) {
        classNames = (classNames) ? classNames : "";          
        return "<td class='" + classNames + "'>" + el + "</td>";
    }

    function createRatesHtmlTbody(rates) {
        var $rates = rates.map(function (rate) {
            var $tableCols =
                createTableCol(rate.name, "table-data__col") +
                createTableCol(rate.apy, "table-data__col text-align--right") +
                createTableCol(rate.earnings, "table-data__col text-align--right");

            return createTableRow($tableCols, "table-data__row");
        });
        return createTableBody($rates.join(''), "table-data__tbody");
    }

    function createTableRow(el, classNames) {
        classNames = (classNames) ? classNames : "";  
        return "<tr class='" + classNames + "'>" + el + "</tr>";
    }

    function parseResponseToJson(response) {
        return response.json();
    }

    function sortRatesByApy(rates) {
        return rates.sort(compareRatesByApy);
    }


    fetch('assets/js/code-test.json')
        .then(parseResponseToJson)
        .then(sortRatesByApy)
        .then(createRatesHtmlTbody)
        .then(appendToTable)
        .catch(function (error) {
            $dataTable.innerHTML = "<p>Rates are unavailable.</p>";
            console.log(error.message);
        });
})(window || {});