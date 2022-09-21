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
        // div parentを作成
        let parent =document.createElement('div')
        parent.classList.add('parent')

        // 5<li>要素を作成
        let li = document.createElement('li')
        console.log(li);
        // 6<li>にクラス（list）を追加
        li.classList.add('list');


        //チェックボックスの作成
        let check = document.createElement('input');
        //  console.log(check);
        // クラスを追加
        check.classList.add('check')
        // ボックスの種類の追加
        check.setAttribute('type','checkbox');
        check.setAttribute('name','name');
        // check.setAttribute('checked','checked'); 
       

        



        // 7<li>にユーザーが入力した内容(4)を入れる
        let span = document.createElement("span");
        span.textContent = inputValue
        
        // li.textContent = inputValue
        // 8<ul>要素を取得 (todo-list)
        let todolist = document.querySelector('.todo-list')
        // console.log(todolist)
        // 9 4-6で作成した<li>を、7で取得した<ul>の子要素に入れる
        todolist.appendChild(li)
        li.appendChild(parent)
        parent.appendChild(check)
        parent.appendChild(span);

        // 10inputの中に入力された文字を消去する（値を''にする）
        inputtext.value = '';
        // 11Deleteボタンを作成（機能としてはボタンですが、<div>要素を使います）
        let deleteBtn = document.createElement('div')
        // console.log(deleteBtn);
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


        
        // チェックボタンが押されたら
        check.addEventListener('change',function () {
            // liタグを作る
            let endlist =document.getElementById('end-list')
            console.log(endlist);
            let list =document.createElement('li')
            console.log(list);
            // listにliの文字を入れる
            list.textContent=span.textContent
            // deleteが入っているので変える
            let li01 =document.getElementsByClassName('list')
            // 完了タスクに移す
            endlist.appendChild(list)
           
        })
    }
})

// エンターキーを押したら
// let key = document.getElementById('input')
// console.log(key);
// key.addEventListener('keyup', function(e) {
//     if (e.code === 'Enter') {
//         console.log('check');
//     }
// });
// btn.onclick=function () {
//     alert('clicked');
    
// }

