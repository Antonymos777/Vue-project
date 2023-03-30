const Market = {
    props: {
      card: Object,
    },
    template: `
    <div class='card'>
    <h2> {{ card.text }} </h2>
    <img :src = "card.png" class="png"/>
    <h3 v-if="card.yes">Доступен</h3>
    <h3 v-else>Не доступен</h3>
    <button> {{ card.price }} руб.</button>
    </div>
    `,
  };
  
  const app = Vue.createApp({
    components: {
      'card': Market,
    },
    data() {
      return {
        cards: [
          {text: 'Компьютеры', 
          price: 7500, 
          png: 'https://i.pinimg.com/originals/fc/91/52/fc915288df0cecf10608dcaf0f710806.jpg', 
          yes: true},
          {text: 'Наушники',
           price: 10500,
            png: 'https://ae04.alicdn.com/kf/S532391c73a764b4a9aeb9d51616ec509Z.jpg', 
            yes: false},
          {text: 'Столы',
           price: 20000, 
           png: 'https://c.dns-shop.ru/thumb/st4/fit/760/600/c16be16501bc0d23572cd57a7659f195/q93_8788d03b854f553ef6f2c2fcfae203e73448eb6d20b6b4583910f64d164b2a86.jpg',
            yes: true},
            {text: 'Клавиатуры',
           price: 30000, 
           png: 'http://elmall76.ru/pics/pics26/121396_2.jpg',
            yes: true},
            {text: 'Видеокарты',
            price: 65000, 
            png: 'https://itcrumbs.ru/wp-content/uploads/2022/02/karty.jpg',
             yes: false},
             {text: 'Мыши',
             price: 1000, 
             png: 'https://andpro.ru/upload/iblock/256/e0z8htpklcwwd3frnwk799xrt1banvom/41670028_ab73_11ec_812b_001e67d1aaeb_5786fe71_ab73_11ec_812b_001e67d1aaeb.jpg',
            yes: true},
        ],
      };
    },
   
  });
  
  app.mount('#app');
  