// 将图片中的学生姓名添加到数组中
let students = [
    // 手机袋1（一班）
    '白林涵', '陈昊妍', '董萌萌', '范昱涵', '高一涵', '郭超',
    '侯宪坤', '黄博', '姜子超', '鞠忠宏', '李茂川', '李永乐',
    '李云', '林佳祺', '吕君蕊', '秦金龙', '秦士淞', '孙家豪',
    '孙若冰', '孙义凯', '孙子凌', '索京奥', '王朝闻', '王俊豪',
    '王梦月', '王文昌', '王运旺', '王祉盛', '卫学振', '武启航',
    '徐浩文', '许广洋', '许源赫', '薛景文', '张丁文', '张静',
    '张俊飞', '张艳可', '张云翔', '张志恒', '赵宝华', '赵家豪',
    '周政涟', '邹谦慧',
    // 手机袋2（二班）
    '卜家豪', '陈亚欣', '丁晓萱', '董恩浩', '段鹏松', '房茜卓',
    '高俊腾', '高鹿桐', '谷天乐', '何沛洋', '贾旭', '靳思同',
    '李凤豪', '李嘉兴', '李建宇', '李万琪', '李欣宇', '李业勤',
    '刘百刚', '刘冰倩', '刘峻泽', '刘一翔', '刘宇倩', '刘志龙',
    '毛诚一', '邵尚薇', '孙健玮', '王宪斌', '王政皓', '王志甲',
    '王子林', '吴梦瑶', '邢嘉旺', '徐佳慧', '许珈玮', '张连祥',
    '张淑恒', '张韵', '张照毅', '张智', '张璐璐', '赵含蕊',
    '赵正阳', '赵珈艺', '祝祥和'
];
let timer;
let lastRandomStudent; // 新增变量，用于保存最后一次随机生成的学生姓名

document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const addStudentBtn = document.getElementById('addStudentBtn');
    const removeStudentBtn = document.getElementById('removeStudentBtn');
    const showStudentListBtn = document.getElementById('showStudentListBtn');
    const studentsUl = document.getElementById('studentsUl');
    const selectedStudentName = document.getElementById('selectedStudentName');
    const studentList = document.querySelector('.student-list');

    function updateStudentList() {
        studentsUl.innerHTML = '';
        students.forEach(student => {
            const li = document.createElement('li');
            li.textContent = student;
            studentsUl.appendChild(li);
        });
    }

    updateStudentList();

    startBtn.addEventListener('click', function () {
        clearInterval(timer);
        console.log('开始按钮点击，清除旧定时器');
        timer = setInterval(() => {
            if (students.length > 0) {
                const randomIndex = Math.floor(Math.random() * students.length);
                lastRandomStudent = students[randomIndex]; // 保存随机生成的学生姓名
                selectedStudentName.textContent = lastRandomStudent;
            } else {
                selectedStudentName.textContent = '';
                clearInterval(timer);
            }
        }, 100);
        console.log('新定时器设置成功');
    });

    stopBtn.addEventListener('click', function () {
        clearInterval(timer);
        selectedStudentName.textContent = lastRandomStudent; // 停止时显示最后一次随机生成的学生姓名
    });

    addStudentBtn.addEventListener('click', function () {
        const newStudent = prompt('请输入要添加的学生姓名');
        if (newStudent && newStudent.trim()!== '') {
            students.push(newStudent);
            updateStudentList();
        }
    });

    removeStudentBtn.addEventListener('click', function () {
        const studentToRemove = prompt('请输入要删除的学生姓名');
        if (studentToRemove && studentToRemove.trim()!== '') {
            students = students.filter(student => student!== studentToRemove);
            updateStudentList();
        }
    });

    showStudentListBtn.addEventListener('click', function () {
        if (studentList.style.display === 'none') {
            studentList.style.display = 'block';
        } else {
            studentList.style.display = 'none';
        }
    });
});