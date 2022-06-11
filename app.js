// DELGETSTEI AJILLAH CONTROLLER
var uiController = (function () {
    var DOMstrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        addBtn: ".add__btn"
    }
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // inc ,exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: function () {
            return DOMstrings;
        }

    };
})();
//SANHUUTEI AJILLAH CONTROLLER
var financeController = (function () {
    //private data
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }
    //private data
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    //var incomes = []
    //var expenses = []

    //var totalIncomes = 0;
    //var totalExpenses = 0;
    //private data
    var data = {
        items: {
            inc: [],
            exp: []
        },
        totals: {
            inc: 0,
            exp: 0
        }
    };

    return {
        addItem: function (type, desc, val) {

            var item, id;
            if (data.items[type].length === 0) id = 1;
            else {
                data.items[type][data.items[type].length - 1].id + 1;
            }

            if (type === 'inc') {
                item = new Income(id, desc, val);
            } else {
                //type === exp
                item = new Expense(id, desc, val);
            }

            data.items[type].push(item);
        }
    }
})();
//Programmin holbogch controller
var appController = (function (uiController, financeController) {
    var ctrlAdditem = function () {
        //1.oruulah ugugdliig delgetsees olj avna.
        var input = uiController.getInput();
        //2.olj avsan ugugdliig sanhuugiin controllert damjuulj tend hadgalna.
        financeController.addItem(input.type, input.description, input.value);
        //3.olj avsan ugugdluudee web deer tohiroh hesegt gargana.
        //4.tusviig tootsoolno.
        //5.etssiin uldegdel tootsoog delgetsend gargana.
    };

    var setupEventListener = function () {
        var DOM = uiController.getDOMstrings();

        document.querySelector(DOM.addBtn).addEventListener("click", function () {
            ctrlAdditem();
        });

        document.addEventListener("keypress", function (event) {
            if (event.KeyCode === 13 || event.Which === 13) {
                ctrlAdditem();
            }
        });
    };

    return {
        init: function () {
            console.log("Application Started...")
            setupEventListener();
        }
    }


})(uiController, financeController);
appController.init();