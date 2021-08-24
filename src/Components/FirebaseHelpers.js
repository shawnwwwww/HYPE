import firebase from 'firebase'

let NUM_SHARDS = 5;

class Game {
    constructor (props, game_id) {
        this.game_id = game_id;
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

var gameConverter = {
    toFirestore: function(game) {
        return {
            game_id: game.id,
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
            is_digital: parseInt(game.is_digital, 10),
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
        const game_id = snapshot.id;
        console.log(data);
        return new Game(data, game_id)
    }
}

function incrementCounter(game_id) {
    console.log("Incrementing " + game_id);
    const ref = firebase.firestore();
    const game_ref = ref.collection('game_data').doc(game_id);

    let num_shards = NUM_SHARDS;
    // Select a shard of the counter at random
    const shard_id = Math.floor(Math.random() * num_shards).toString();
    const shard_ref = ref.collection('counters').doc(game_id).collection('shards').doc(shard_id);

    // Update count
    return shard_ref.update("count", firebase.firestore.FieldValue.increment(1)).then(
        shard_ref.get().then((doc) => {
            console.log("Document data:", doc.data());
        })
    );
}

function decrementCounter(game_id) {
    console.log("Decrementing " + game_id);
    const ref = firebase.firestore();
    const game_ref = ref.collection('game_data').doc(game_id);

    let num_shards = NUM_SHARDS;
    // Select a shard of the counter at random
    const shard_id = Math.floor(Math.random() * num_shards).toString();
    const shard_ref = ref.collection('counters').doc(game_id).collection('shards').doc(shard_id);

    // Update count
    return shard_ref.update("count", firebase.firestore.FieldValue.increment(-1)).then(
        shard_ref.get().then((doc) => {
            console.log("Document data:", doc.data());
        })

    );
}

function getCount(game_id) {
    const ref = firebase.firestore();
    const game_ref = ref.collection('game_data').doc(game_id);
    // Sum the count of each shard in the subcollection
    return ref.collection('counters').doc(game_id).collection('shards').get().then((snapshot) => {
        console.log("Getting count of " + game_id);
        let total_count = 0;
        
        snapshot.forEach((doc) => {
            total_count += doc.data().count;
        });
        
        console.log("New total is: " + total_count);

        return game_ref.update({
            hype: total_count
        })
    }).catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}

function updateHypes(game_id) {
    const ref = firebase.firestore();
    const game_ref = ref.collection('game_data').doc(game_id);
    
    let count = getCount(game_id);

    return game_ref.update({
        hype: count
    })
}

export {
    Game,
    gameConverter,
    incrementCounter,
    decrementCounter,
    getCount,
    updateHypes,
}