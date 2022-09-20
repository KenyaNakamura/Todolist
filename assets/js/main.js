// このファイルに処理を記述する
// ボタン要素を取得
let btn = document.getElementById('btn')
console.log(btn);

// 2ボタンにクリックイベントを追加する (3-15は全てこのイベント内)

btn.addEventListener('click', function () {
    let inputbtn = document.getElementById('input')
    if (inputbtn.value !== '') {

        let inputtext = document.getElementById('input')
        // console.log('check');
        // 3 ユーザーが入力した要素を取得
        console.log(inputtext.value);
        // 4上で取得した要素の入力された内容 (value) を取得し、変数に代入
        let inputValue = inputtext.value
        // 5<li>要素を作成
        let li = document.createElement('li')
        console.log(li);
        // 6<li>にクラス（list）を追加
        li.classList.add('list');
        // 7<li>にユーザーが入力した内容(4)を入れる
        li.textContent = inputValue
        // 8<ul>要素を取得 (todo-list)
        let todolist = document.querySelector('.todo-list')
        // console.log(todolist);
        // 9 4-6で作成した<li>を、7で取得した<ul>の子要素に入れる
        todolist.appendChild(li)
        // 10inputの中に入力された文字を消去する（値を''にする）
        inputtext.value = '';
        // 11Deleteボタンを作成（機能としてはボタンですが、<div>要素を使います）
        let deleteBtn = document.createElement('div')
        console.log(deleteBtn);
        // 12Deleteボタンのコンテンツ (文字) を指定
        deleteBtn.textContent = 'Delete';
        // 13Deleteボタンにクラス (delete) を追加
        deleteBtn.classList.add('delete');
        // 14 11-13で作成したDeleteボタンを、4-6で作成した<li>の子要素に入れる
        li.appendChild(deleteBtn)
        // // Deleteボタンにクリックイベントを追加 (15)
        deleteBtn.addEventListener('click', function () {
            // クリックした要素 (this) を親ごと削除
            this.parentElement.remove();
        });
    }
})

