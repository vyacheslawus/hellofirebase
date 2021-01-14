  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC_kA68hwi825-zXrhlqbOgaO00hsO3ZPA",
    authDomain: "sayhelloproject-6c4ae.firebaseapp.com",
    projectId: "sayhelloproject-6c4ae",
    storageBucket: "sayhelloproject-6c4ae.appspot.com",
    messagingSenderId: "413198374763",
    appId: "1:413198374763:web:57e6c54f62bb9a64c2de2e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  console.log(firebase);
// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');



const regExpValidEmail = /^\w+@\w+\.\w{2,}$/;

// GET ELEMENTS - GET ELEMENTS - GET ELEMENTS - GET ELEMENTS - //

const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup = document.querySelector('.login-sign-up');
const loginSignin = document.querySelector('.login-sign-in');

const userElem = document.querySelector('.user');
const userNameElem = document.querySelector('.user-name');

const exitElem = document.querySelector('.exit');
const editElem = document.querySelector('.edit');
const editContainer = document.querySelector('.edit-container');

const editUserName = document.querySelector('.edit-username');
const editPhotoURL = document.querySelector('.edit-photo');
const userAvatarElem = document.querySelector('.user-avatar');

const postWrapper = document.querySelector('.posts');
const buttonNewPost = document.querySelector('.button-new-post');

const addPostElem = document.querySelector('.add-post');

const content = document.querySelector('.content');
const headerLogoElem = document.querySelector('.header-logo');

const DEFAULT_PHOTO = userAvatarElem.src;




// USERS DATA - USERS DATA -  USERS DATA -  USERS DATA -  USERS DATA - //


const setUsers = {
  user: null,
  initUser(callback) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }

        if (callback) {
      callback();
    }
    })

  

  },
  logIn(email, password, handler) {
    if (!regExpValidEmail.test(email)) return alert('email ne validen!');

    firebase.auth().signInWithEmailAndPassword(email, password).catch(err => {
      const errCode = err.code;
      const errMessage = err.message;
      if (errCode === 'auth/wrong-password') {
        console.log(errMessage);
        alert('Неверный пароль')
      } else if (errCode === 'auth/user-not-found') {
        console.log(errMessage);
        alert('Пользователь не найден')
      } else {
        alert(errMessage)
      }
    })
 


  //  const user = this.getUser(email);
  //  if (user && user.password === password) {
  //    this.authorizedUser(user);
  //    handler();
  //  } else {
  //    alert('Пользователь с такими данными не найден');
  //  }
  },
  logOut(callback) {

    firebase.auth().signOut();
//     this.user = null;
// console.log('BbIXOD');
// callback();
callback();
  },
  signUp(email, password, handler) {
    if (!regExpValidEmail.test(email)) return alert('email ne validen!');


    if (!email.trim() || !password.trim()) {
      alert('введите данные');
      return;
    }

    firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then((data) => {
      this.editUser(email.substring(0, email.indexOf('@')), null, handler)
    })
    .catch((err) => {
      const errCode = err.code;
      const errMessage = err.message;
      if (errCode === 'auth/weak-password') {
        console.log(errMesage);
        alert('Слабый пароль')
      } else if (errCode === 'auth/email-already-in-use') {
        console.log(errMessage);
        alert('Этот е-мэйл уже занят')
      } else {
        alert(errMessage)

      };

      console.log(err);
    });
    

    // if (!this.getUser(email)) {
    //   const user = {email, password, displayName: email.substring(0, email.indexOf('@'))};
    //   listUsers.push(user);
    //   this.authorizedUser(user);
    //   handler();
    // } else {
    //   alert('Polzovatel uje sushestuet!');
    // }
    
  },
  // getUser(email) {
  //   return listUsers.find(item => item.email === email);
  // },
  // authorizedUser(user) {
  //   this.user = user;
  // },
  editUser(displayName, photoURL, callback) {

    const user = firebase.auth().currentUser;


    if (displayName) {
    if (photoURL) { 
      user.updateProfile({
        displayName,
        photoURL
      }).then(callback)
    } else {
      user.updateProfile({
        displayName
      }).then(callback)
    }
  }

  },

  
};

const setPosts = {
  allPosts: [
    {
      title: 'POST_TITLE',
      text: 'Lorem, ipsum dolor sit amet consecteturadipisicing elit. Aut perspiciatis harum possimus accusamus quisquam ratione autem aspernatur a, odio ipsum molestiae vitae quae. Deleniti, ipsa corporis aliquid id atque totam mollitia possimus cupiditate accusamus sint ea vero laboriosam repellendus quis sit minima sequi, hic incidunt, nihil sunt suscipit reprehenderit! Asperiores sunt consequuntur in qui illo dolore reiciendis, nisi architecto quam praesentium, fuga possimus ab. Unde officia a quam ut eligendi?',
      tags: ['new', 'fresh', 'hot', 'old', 'fashion'],
      author: {displayName: 'Janee', photo: 'https://news102.ru/wp-content/uploads/2020/07/july-696x820.png'},
      date: '09.01.2021, 20:55:00',
      like: 15,
      comments: 4,

    },
      {
      title: 'POST_TITLE_2',
      text: 'Lorem, ipsum dolor sit amet consecteturadipisicing elit. Aut perspiciatis harum possimus accusamus quisquam ratione autem aspernatur a, odio ipsum molestiae vitae quae. Deleniti, ipsa corporis aliquid id atque totam mollitia possimus cupiditate accusamus sint ea vero laboriosam repellendus quis sit minima sequi, hic incidunt, nihil sunt suscipit reprehenderit! Asperiores sunt consequuntur in qui illo dolore reiciendis, nisi architecto quam praesentium, fuga possimus ab. Unde officia a quam ut eligendi?',
      tags: ['new', 'fresh', 'hot', 'old', 'fashion'],
      author: {displayName: 'KATTHERINE_RAIN', photo: 'https://news102.ru/wp-content/uploads/2019/11/november_girl-696x793.png'},
      date: '09.01.2021, 20:55:00',
      like: 48,
      comments: 14,

    },
      {
      title: 'POST_TITLE_3',
      text: 'Lorem, ipsum dolor sit amet consecteturadipisicing elit. Aut perspiciatis harum possimus accusamus quisquam ratione autem aspernatur a, odio ipsum molestiae vitae quae. Deleniti, ipsa corporis aliquid id atque totam mollitia possimus cupiditate accusamus sint ea vero laboriosam repellendus quis sit minima sequi, hic incidunt, nihil sunt suscipit reprehenderit! Asperiores sunt consequuntur in qui illo dolore reiciendis, nisi architecto quam praesentium, fuga possimus ab. Unde officia a quam ut eligendi?',
      tags: ['new', 'fresh', 'hot', 'old', 'fashion'],
      author: {displayName: 'Marsielle', photo: 'https://news102.ru/wp-content/uploads/2019/11/november_girl-696x793.png'},
      date: '09.01.2021, 20:55:00',
      like: 13,
      comments: 1,

    },

  ],
  addPost(title, text, tags, handler) {
    
    this.allPosts.unshift({
      title,
      text,
      tags: tags.split(',').map(tag => tag.trim()),
      author: {
        displayName: setUsers.user.displayName,
        photo: setUsers.user.photoURL,
      },
      date: new Date().toLocaleString(),
      like: 0,
      comments: 0,
    });

    firebase.database().ref('post').set(this.allPosts)
    .then(() => this.getPosts(handler))
  },
  getPosts(handler) {
    firebase.database().ref('post').on('value', snapshot => {
      this.allPosts = snapshot.val() || [];
      handler();
    })
  }

}

// FUNCTIONS EXPRESSION => FUNCTIONS EXPRESSION => FUNCTIONS EXPRESSION => //

const toggleAuthDom = () => {
    const user = setUsers.user;
    console.log('user: ', user);

    if (user) {
      loginElem.style.display = 'none';
      userElem.style.display = '';
      userNameElem.textContent = user.displayName;
      userAvatarElem.src = user.photoURL || DEFAULT_PHOTO; 
      buttonNewPost.style.display = 'flex';
    } else {
      loginElem.style.display = '';
      userElem.style.display = 'none';
      buttonNewPost.style.display = 'none';
      addPostElem.style.display = 'none';
      postWrapper.style.display = 'block';

    }
};

const showAddPost = () => {
  addPostElem.style.display = 'flex';
  postWrapper.style.display = 'none';
};


const showAllPosts = () => {

  addPostElem.style.display = 'none';
  postWrapper.style.display = 'block';

  let postsHTML = '';

  setPosts.allPosts.forEach(({ title, text, date, tags, like, comments, author }) => {


    postsHTML += `
          <section class="post">
        <div class="post-body">
          <h2 class="post-title">${title}</h2>
          <p class="post-text">${text}</p>
          <div class="tags">
            <a href="#" class="tag">${tags.map(tag => `<a href="#" class="tag">#${tag}</a>`)}</a>
          </div>
         </div>
        <div class="post-footer">
          <div class="post-buttons">
            <button class="post-button likes">
              <svg width="19" height="20" class="icon icon-like">
                <use xlink:href="img/icons.svg#like"></use>
              </svg>
              <span class="likes-counter">${like}</span>
            </button>
            <button class="post-button comments">
              <svg width="21" height="21" class="icon icon-comment">
                <use xlink:href="img/icons.svg#comment"></use>
              </svg>
              <span class="comments-counter">${comments}</span>
            </button>
            <button class="post-button save">
              <svg width="19" height="19" class="icon icon-save">
                <use xlink:href="img/icons.svg#save"></use>
              </svg>
            </button>
            <button class="post-button share">
              <svg width="17" height="19" class="icon icon-share">
                <use xlink:href="img/icons.svg#share"></use>
              </svg>
            </button>
          </div>
          <div class="post-author">
            <div class="author-about">
              <a href="#" class="author-username">${author.displayName}</a>
              <span class="post-time">${date}</span>
            </div>
            <a href="#" class="author-link"><img src=${author.photo || "https://pbs.twimg.com/profile_images/1160213358781452288/V7M8zqN2_400x400.jpg"} alt="avatar" class="author-avatar"></a>
          </div>
          <!-- /.post-author -->
        </div>
      </section>
    `;
  });

  postWrapper.innerHTML = postsHTML;
};


const init = () => {


  // LISTENERS LISTENERS LISTENERSTENERS LISTENERS LISTENERS LISTENERS LISTENERS //

  menuToggle.addEventListener('click', (event) => {
  event.preventDefault();
  
  menu.classList.toggle('visible');
});


  loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

    setUsers.logIn(emailInput.value, passwordInput.value, toggleAuthDom);
    loginForm.reset();
});

loginSignup.addEventListener('click', (event) => {
    event.preventDefault();

    setUsers.signUp(emailInput.value, passwordInput.value, toggleAuthDom);

    

    loginForm.reset();
});

exitElem.addEventListener('click', event => {
  event.preventDefault();

  setUsers.logOut(toggleAuthDom);

});

editElem.addEventListener('click', event => {
  event.preventDefault();

  editContainer.classList.toggle('visible');
  editUserName.value = setUsers.user.displayName
});

editContainer.addEventListener('submit', event => {
  event.preventDefault();

  setUsers.editUser(editUserName.value, editPhotoURL.value, toggleAuthDom);
  editContainer.classList.remove('visible');

});

buttonNewPost.addEventListener('click', (event) => {
  event.preventDefault();

  showAddPost();
  menu.classList.remove('visible');
});

addPostElem.addEventListener('submit', (event) => {
  event.preventDefault();

  const { title, text, tags } = addPostElem.elements;

  if (title.value.length < 6) {
    alert('Необходимо больше символом для заголовка');
    return;
  }

    if (text.value.length < 10) {
    alert('Необходимо больше символом для поста');
    return;
  }

  setPosts.addPost(title.value, text.value, tags.value, showAllPosts);

  addPostElem.style.display = 'none';
  addPostElem.reset();
});

headerLogoElem.addEventListener('click', event => {
  event.preventDefault();

  postWrapper.style.display = 'block';
  addPostElem.style.display = 'none';
  menu.classList.remove('visible');
});
  setUsers.initUser(toggleAuthDom);
  setPosts.getPosts(showAllPosts);
  console.log('showAllPosts: ', showAllPosts);
  
  



};





document.addEventListener('DOMContentLoaded', () => {
  init();
})

