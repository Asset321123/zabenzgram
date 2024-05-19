//messi: Контейнер для всех постов.
//ronaldo: Контейнер для одного поста.
//neymar: Кнопка лайк
//mbappe: Поле для ввода комментария.
//modric: Кнопка для отправки комментария.

document.addEventListener('DOMContentLoaded', function() {
    const messi = document.getElementsByClassName('messi')[0];

    function createPost(i) {
        const ronaldo = document.createElement('div');
        ronaldo.className = 'post';

        const image = document.createElement('img');
        image.src = 'https://picsum.photos/300/200?random=' + i;
        image.alt = 'Random Image ' + i;

        const name = document.createElement('h2');
        name.textContent = 'Post ' + (i + 1);

        const likesCount = document.createElement('div');
        likesCount.className = 'likes';
        likesCount.textContent = '0';

        const neymar = document.createElement('span');
        neymar.className = 'neymar';
        neymar.textContent = '❤️';
        neymar.likes = 0;
        neymar.onclick = function() {
            updateLikes(neymar, likesCount);
        };

        const mbappe = document.createElement('input');
        mbappe.type = 'text';
        mbappe.className = 'mbappe';
        mbappe.placeholder = 'Оставьте комментарий';

        const modric = document.createElement('button');
        modric.className = 'modric';
        modric.textContent = 'Отправить';
        modric.onclick = function() {
            addComment(mbappe, commentList);
        };

        const commentList = document.createElement('ul');
        commentList.className = 'comment-list';

        ronaldo.appendChild(image);
        ronaldo.appendChild(name);
        ronaldo.appendChild(neymar);
        ronaldo.appendChild(likesCount);
        ronaldo.appendChild(mbappe);
        ronaldo.appendChild(modric);
        ronaldo.appendChild(commentList);

        
        messi.appendChild(ronaldo);
    }

    for (let i = 0; i < 100; i++) {
        createPost(i);
    }

    // Обновляю количество лайков ещкерееееее
    function updateLikes(neymar, likesCountElement) {
        neymar.likes++;
        likesCountElement.textContent = neymar.likes;
    }

    // Добавляю комментарии ещкереееееее
    function addComment(mbappe, commentList) {
        if (mbappe.value.trim() !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = 'Asset: ' + mbappe.value.trim();
            commentList.appendChild(listItem);
            mbappe.value = '';
        }
    }
});

