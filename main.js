  var ctx = document.getElementById("myPieChart");
  // ボタンをクリックした時に
  $('.complete-btn').click(function(){

   // 入力値を取得して、変数に代入
    var income20 = $('.income20').val();
    var income30 = $('.income30').val();
    var income40 = $('.income40').val();
    var income50 = $('.income50').val();
    var income60 = $('.income60').val();

    var expense20 = $('.expense20').val();
    var expense30 = $('.expense30').val();
    var expense40 = $('.expense40').val();
    var expense50 = $('.expense50').val();
    var expense60 = $('.expense60').val();


    var asset20 = income20 - expense20;
    var asset21 = Math.round(parseInt(income20) + ((income30-income20) / 10 * 1 - expense20) + asset20);
    var asset22 = Math.round(parseInt(income20) + ((income30-income20) / 10 * 2 - expense20) + asset21);
    var asset23 = Math.round(parseInt(income20) + ((income30-income20) / 10 * 3 - expense20) + asset22);
    var asset24 = Math.round(parseInt(income20) + ((income30-income20) / 10 * 4 - expense20) + asset23);
    var asset25 = Math.round(parseInt(income20) + ((income30-income20) / 10 * 5 - expense20) + asset24);
    var asset26 = Math.round(parseInt(income20) + ((income30-income20) / 10 * 6 - expense20) + asset25);
    var asset27 = Math.round(parseInt(income20) + ((income30-income20) / 10 * 7 - expense20) + asset26);
    var asset28 = Math.round(parseInt(income20) + ((income30-income20) / 10 * 8 - expense20) + asset27);
    var asset29 = Math.round(parseInt(income20) + ((income30-income20) / 10 * 9 - expense20) + asset28);

    var asset30 = income30 - expense30 + asset29;
    var asset31 = Math.round(parseInt(income30) + ((income40-income30) / 10 * 1 - expense30) + asset30);
    var asset32 = Math.round(parseInt(income30) + ((income40-income30) / 10 * 2 - expense30) + asset31);
    var asset33 = Math.round(parseInt(income30) + ((income40-income30) / 10 * 3 - expense30) + asset32);
    var asset34 = Math.round(parseInt(income30) + ((income40-income30) / 10 * 4 - expense30) + asset33);
    var asset35 = Math.round(parseInt(income30) + ((income40-income30) / 10 * 5 - expense30) + asset34);
    var asset36 = Math.round(parseInt(income30) + ((income40-income30) / 10 * 6 - expense30) + asset35);
    var asset37 = Math.round(parseInt(income30) + ((income40-income30) / 10 * 7 - expense30) + asset36);
    var asset38 = Math.round(parseInt(income30) + ((income40-income30) / 10 * 8 - expense30) + asset37);
    var asset39 = Math.round(parseInt(income30) + ((income40-income30) / 10 * 9 - expense30) + asset38);

    var asset40 = income40 - expense40 + asset39;
    var asset41 = Math.round(parseInt(income40) + ((income50-income40) / 10 * 1 - expense40) + asset40);
    var asset42 = Math.round(parseInt(income40) + ((income50-income40) / 10 * 2 - expense40) + asset41);
    var asset43 = Math.round(parseInt(income40) + ((income50-income40) / 10 * 3 - expense40) + asset42);
    var asset44 = Math.round(parseInt(income40) + ((income50-income40) / 10 * 4 - expense40) + asset43);
    var asset45 = Math.round(parseInt(income40) + ((income50-income40) / 10 * 5 - expense40) + asset44);
    var asset46 = Math.round(parseInt(income40) + ((income50-income40) / 10 * 6 - expense40) + asset45);
    var asset47 = Math.round(parseInt(income40) + ((income50-income40) / 10 * 7 - expense40) + asset46);
    var asset48 = Math.round(parseInt(income40) + ((income50-income40) / 10 * 8 - expense40) + asset47);
    var asset49 = Math.round(parseInt(income40) + ((income50-income40) / 10 * 9 - expense40) + asset48);

    var asset50 = income50 - expense50 + asset49;
    var asset51 = Math.round(parseInt(income50) + ((income60-income50) / 10 * 1 - expense50) + asset50);
    var asset52 = Math.round(parseInt(income50) + ((income60-income50) / 10 * 2 - expense50) + asset51);
    var asset53 = Math.round(parseInt(income50) + ((income60-income50) / 10 * 3 - expense50) + asset52);
    var asset54 = Math.round(parseInt(income50) + ((income60-income50) / 10 * 4 - expense50) + asset53);
    var asset55 = Math.round(parseInt(income50) + ((income60-income50) / 10 * 5 - expense50) + asset54);
    var asset56 = Math.round(parseInt(income50) + ((income60-income50) / 10 * 6 - expense50) + asset55);
    var asset57 = Math.round(parseInt(income50) + ((income60-income50) / 10 * 7 - expense50) + asset56);
    var asset58 = Math.round(parseInt(income50) + ((income60-income50) / 10 * 8 - expense50) + asset57);
    var asset59 = Math.round(parseInt(income50) + ((income60-income50) / 10 * 9 - expense50) + asset58);

    var asset60 = income60-expense60+asset59;

    console.log(asset20);
    console.log(asset21);
    console.log(income20);
    console.log((income30-income20) / 10);
    console.log(income20 + (income30-income20) / 10);

    // グラフの設定
    var myPieChart = new Chart(ctx, {

      // 棒グラフ
      type: 'bar',
      data: {
        labels: ["20歳", "21歳", "22歳", "23歳", "24歳", "25歳", "26歳", "27歳", "28歳", "29歳",
         "30歳", "31歳", "32歳", "33歳", "34歳", "35歳", "36歳", "37歳", "38歳", "39歳",
         "40歳", "41歳", "42歳", "43歳", "44歳", "45歳", "46歳", "47歳", "48歳", "49歳",
         "50歳", "51歳", "52歳", "53歳", "54歳", "55歳", "56歳", "57歳", "58歳", "59歳",
         "60歳"],
        datasets: [{
            /*backgroundColor: [
                "#e0e0e0",
                "#a0a0a0",
                "#606060",
                "#202020"
            ],*/
            label:'資産額(万円)',
            // 入力値が入っている変数を利用
            data: [asset20, asset21, asset22, asset23, asset24, asset25, asset26, asset27, asset28, asset29,
              asset30, asset31, asset32, asset33, asset34, asset35, asset36, asset37, asset38, asset39,
              asset40, asset41, asset42, asset43, asset44, asset45, asset46, asset47, asset48, asset49,
              asset50, asset51, asset52, asset53, asset54, asset55, asset56, asset57, asset58, asset59,
              asset60]
            /*data:[
            for(var i = 20; i < 70; i++){
            var assetAge[i] = i;
            console.log(assetAge[i]);
          }
        ]*/
      }]
      },
      options: {
        title: {
          display: true,
          text: '資産額'
        }
      },
    });
  })

  /*
  var ass = [];
  for (var m = 2; m < 7; m++){
    ass[m] = [];
    for (var n = 0; n < 10; n++){
      ass[m][n] = 10*m + n;
    }
  }



  const len = 9; //何かしら入力値を受け取ったとする

  //変数を動的に生成するための連想配列
  const variables = {};

  //要素を追加していく＝変数を生成する
  for(let i = 1; i <= len; i++){
      variables['variable' + i] = 'value' + i;
  }
  console.log(variables);*/
