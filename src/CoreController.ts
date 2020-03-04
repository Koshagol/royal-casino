export class CoreController {

  spins: number = 0;
  consumption: number = 0;
  matches: number = 0;



  compareArr(arr: any, strict: any) {
        let test,
            equal = strict ? (a: any, b: any) => {
                // tslint:disable-next-line:triple-equals
                return a == b;
            } : (a: any, b: any) => a === b;

      if (Array.isArray(arr)) {
          try {
              arr.reduce(
                  (prev, current) => {
                      if (equal(current, prev))
                          return current;
                      else
                          throw new Error('Error.');
                  });

              test = true;
          } catch (e) {
              test = false;
          }
          return test;
      } else {
          throw new Error(`It is not an array!`);
      }
  }

  transpose(arr: Array<number>, size: number) {
      return Array.from({length: Math.ceil(arr.length / size)}, (_: any, i: any) => (
          arr.slice(i * size, i * size + size)
      ));

  }

  spin() {
        this.spins++;
        const spinResult = this.getSpinResult().matrix;
        let arr = this.transpose(spinResult, 4);
        console.log(arr);
        arr.forEach(function(index: any, item: any, array: any) {
            let currencyElem = array[item];
            if (this.compareArr(currencyElem) == true) {
                this.matches++;
            }
        }.bind(this));


        let spinPrice = this.getQuests()[1].questValue;
        this.consumption += spinPrice;
        this.questProgress();
        return arr;
    }

  questProgress() {
      let questValue = this.getQuests()[0].questValue;
      if (this.spins == questValue) {
          console.log('Квест выполнен. 12 вращени сделано.');
      }
      if (this.consumption == 2000) {
          console.log('Квест выполнен. Потрачено 2000 монет.');
      }
      if (this.matches >= 3 && this.matches <= 5) {
          console.log('Квест выполнен! 3 раза выбито комбо.');
      }
  }

  getQuests() {
    return [
            {
                id: 1,
                userId: 1,
                questType: 'do_spin',
                questValue: 12,
                userQuestValue: 0,
                isCompleted: false,
                dateCompleted: null
            },
            {
                id: 1,
                userId: 1,
                questType: 'spent_money',
                questValue: 2000,
                userQuestValue: 0,
                isCompleted: false,
                dateCompleted: null
            },
            {
                id: 1,
                userId: 1,
                questType: 'combo_row',
                questValue: 2,
                userQuestValue: 0,
                isCompleted: false,
                dateCompleted: null
            },
            {
                id: 1,
                userId: 1,
                questType: 'get_symbol',
                questValue: 1,
                userQuestValue: 0,
                isCompleted: false,
                dateCompleted: null
            }
        ];
  }

   getSpinResult() {
        return {
            matrix: [
              12, 12, 12, 12
              11, 33, 12, 44,
              44, 44, 44, 44
            ],
            spentMoney: 1000,
        };
    }


  randomArray(length: number, max: number) {
      return Array.apply(null, Array(length)).map(function() {
          return Math.round(Math.random() * max);
      });
  }
}
