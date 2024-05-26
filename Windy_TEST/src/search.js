load('config.js');
function execute(key, page) {
    if(!page) page =1
	let response = fetch(config_host2 + "/info?book_id=" + key)
	if (response.ok) {
		let doc = response.json();
		let item_list = doc.data.search_tabs[0].data
		const data = [];
		item_list.forEach((el, index) => {
            if(el.book_data)
            {
                let e = el.book_data[0]
                data.push({
                    name: e.book_name,
                    link: "https://fanqienovel.com" + "/page/" + e.book_id,
                    cover: e.thumb_url,
                    description: `${e.serial_count} - ${e.score} - ${e.word_number}`,
                    host: config_host
                })
            }
		});
        let next = parseInt(page,10) +1
        return Response.success(data, next.toString());
	}
	return null;
}