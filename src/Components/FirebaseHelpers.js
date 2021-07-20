import react from 'react'
import { firebaseFirestore } from '../firebase';

class Game {
    constructor (props) {
        this.game_title = props.game_title;
        this.release_date = props.release_date;
        this.preorder_date = props.preorder_date;
        this.developer = props.developer;
        this.publisher= props.publisher;
        this.hype= props.hype;
        this.msrp= props.msrp;
        this.amazon_link= props.amazon_link;
        this.target_link= props.target_link;
        this.nintendo_eshop_link= props.nintendo_eshop_link;
        this.steam_link= props.steam_link;
        this.kickstarter_link= props.kickstarter_link;
        this.is_physical= props.is_physical;
        this.is_digital= props.is_digital;
        this.img_self_link= props.img_self_link;
        this.banner_img_self_link= props.banner_img_self_link;
        this.switch_img_self_link= props.switch_img_self_link;
        this.ps5_img_self_link= props.ps5_img_self_link;
        this.ps4_img_self_link= props.ps4_img_self_link;
        this.xbox_img_self_link= props.xbox_img_self_link;
        this.platforms= props.platforms;
        this.screenshot_self_links= props.screenshot_self_links;
        this.coverage_links= props.coverage_links;
    }
    toString() {
        return this.game_title;
    }
}

// function getGameData(ref, type) {
//     let items = [];
//     function addItem(item) {items.push(item)}
    
//     switch (type) {
//         case 'allReleases':
//             // get all releases, sorted by newest released?
//             ref.withConverter(gameConverter).get().then((item) => {
//                 item.docs.map((doc) => addItem(doc.data()));
//                 //return items;
//             })
//             console.log(items)
//             return items;
//             break;
//         case 'releasingSoon':
//             // get {num} releases that are releasing soon
//             ref.withConverter(gameConverter).get().then((item) => {
//                 const items = item.docs.map((doc) => doc.data());
//             })
//             break;
//         case 'wholesomeDirect':
//             ref.withConverter(gameConverter).get().then((item) => {
//                 const items = item.docs.map((doc) => doc.data());
//             })
//             break;
//         case 'summerGameFestKickoff':
//             ref.withConverter(gameConverter).get().then((item) => {
//                 const items = item.docs.map((doc) => doc.data());
//             })
//             break;
//     }

    // ref.withConverter(gameConverter).get().then((item) => {
    //     const items = item.docs.map((doc) => doc.data());
    //     setGameData(items);
    // })
// }

function toDateTime(secs) {
    var t = new Date(Date.UTC(1970, 0, 1)); // Epoch
    t.setUTCSeconds(secs);
    return t;
}

var gameConverter = {
    toFirestore: function(game) {
        return {
            game_title: game.game_title,
            release_date: game.release_date,
            preorder_date: game.preorder_date,
            developer: game.developer,
            publisher: game.publisher,
            hype: parseInt(game.hype, 10),
            msrp: game.msrp,
            amazon_link: game.amazon_link,
            target_link: game.target_link,
            nintendo_eshop_link: game.nintendo_eshop_link,
            steam_link: game.steam_link,
            kickstarter_link: game.kickstarter_link,
            is_physical: parseInt(game.is_physical, 10),
            is_digital: parseInt(game.is_digital,),
            img_self_link: game.img_self_link,
            banner_img_self_link: game.banner_img_self_link,
            switch_img_self_link: game.switch_img_self_link,
            ps5_img_self_link: game.ps5_img_self_link,
            ps4_img_self_link: game.ps4_img_self_link,
            xbox_img_self_link: game.xbox_img_self_link,
            platforms: game.platforms,
            screenshot_self_links: game.screenshot_self_links,
            coverage_links: game.coverage_links
        }
    },
    fromFirestore: function(snapshot, options) {
        const data = snapshot.data(options);
        return new Game(data)
    }
}

export {
    Game,
    gameConverter,
}