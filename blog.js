const posts = [
    {
        title: 'Selam',
        description: 'Lorem ipsum'
    },
    {
        title: 'Okay',
        description: 'Lorem ipsum dolor sit amet.'
    },
    {
        title: 'Wow',
        description: 'Lorem ipsum dolor sit amet. Preveius'
    }
]

const getBlog = async () => {
    await posts.map((item) => {
        let post = `Başlık: ${item.title} Açıklama: ${item.description}`
        console.log(post)
    })
}

getBlog()

const addBlog = () => {
    posts.push({title: 'Yeni!', description: 'Bu yeni!'})
    getBlog()
}

addBlog()