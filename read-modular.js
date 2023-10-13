const fs = require('fs');
const xlsx = require('node-xlsx')
const filePath = 'src/view';
let modularFiles = []; // 存储有modular文件夹的父级文件夹名
let result = []; // 存储路径
let modularName = {}; //存储各个局 行局名称 主题名称  key: 存储有modular文件夹的父级文件夹名      value: 一个对象，对象里面有行局名称 主题名称
let excelData =[];  //excel数据映射
// 进行文件名获取，  获取src/view/.../modular/ 中 ...的文件名 ， 由于层级明显，这边暂时用for，不用递归。这边用fs里的同步api
function getFaterFileName() {
    // 获取...的文件名
    let files = fs.readdirSync(filePath);
    // 遍历每一个 确认这个文件夹下是否包含modular
    if(Array.isArray(files)) {
        files.forEach((item) => {
            if(fs.lstatSync(`${filePath}/${item}`).isDirectory()){
                let childrenFiles = fs.readdirSync(`${filePath}/${item}`);
                if(Array.isArray(childrenFiles)&&childrenFiles.includes('modular')){
                    // 添加文件夹名到结果数组里
                    modularFiles.push(item);
                } else {

                }
            }
        });
    }
}

// 递归遍历 文件
function getFile(path,keyHG) {
    // 当前路径下的所有文件名（文件夹名、文件名）
    let files = fs.readdirSync(path);
    // 遍历每一个文件名
    if(Array.isArray(files)) {
        files.forEach((item) => {
            if(fs.lstatSync(`${path}/${item}`).isDirectory()){ //是文件夹
                getFile(`${path}/${item}`,keyHG);
            } else if(fs.readFileSync(`${path}/${item}`,'utf8').includes('<base-module')){ // 是文件
                let str = `${path}/${item}`;
                // 读取对应vue文件里的东西 并进行记录
                getModularName(str,keyHG);
                //获取文件路径
                str = str.split('/');
                str.shift();
                str = str.reduce((prev,cur)=> {
                    return prev + '/' + cur
                });
                result.push(str);
            }
        });
    }
}
// 获取搜索想要的模块文件路径
function getResultFile() {
    let files = modularFiles;
    files.forEach(item => {
        getFile(filePath + `/${item}/modular`,item)
    })
}
// 生成脚本js文件
function createdFile() {
    let content = 'let arr = [];\n'
    result.forEach(item => {
        content += `arr.push(require('@/${item}'));\n`;
    })
    content +=  'export default arr '
    fs.writeFileSync('src/view/modular.js',content);
}


// 读取行局名称与主题名称文件
function getNameHG() {
    let resultArr = {}; // 用于存储结果
    modularFiles.forEach(item => {
        // 先判断文件是否存在
        let path = `src/view/${item}/modular-name.md`;
        resultArr[item] = {};
        let obj = {};
        let file = fs.existsSync(path);
        if(file){
            let data = fs.readFileSync(path,'utf8');
            console.log(data);
            let arr = data.split('&');
            arr.forEach(str => {
                let key = str.split('=')[0], value = str.split('=')[1];
                value = value.replace(/\r\n/g,'');
                obj[key] = value;
            });
            // 标记是否有modular-name.md文件
            obj.isExit = true;
            resultArr[item] = obj;
        } else {
            resultArr[item] = {
                isExit: false,
            };
            console.log('读取失败')
        }
    });
    return resultArr;
}
// 读取模块名称
function getModularName(path,keyHG) {
    let file = fs.existsSync(path);
    let result = '';
    if(file && modularName[keyHG]['isExit']){
        let data = fs.readFileSync(path,'utf8');
        let name ='',id = '';
        // 匹配出整个<modular >
        data = RegExpTool(data,/(?<=<base-module)[\s\S]*?(?=>)/);
        // 匹配:name="zhe" 里面的zhe
        name = RegExpTool(data,/(?<=:name=|name=)(\s)*".*?"/);
        id = RegExpTool(data,/(?<=:star-id=|star-is=|starId=|:starId)(\s)*".*?"/);

        // 匹配出""里的东西
        name = RegExpTool(name,/(?<=").*?(?=")/);
        id = RegExpTool(id,/(?<=").*?(?=")/);
        // 如果这次name里的东西首位带''就把他去除，没有就不用
        if(name.charAt(0)==='\'' && name.charAt(name.length - 1) === '\''){
            name = RegExpTool(name,/(?<=').*?(?=')/);
        }
        // 如果这次name里的东西首位带''就把他去除，没有就不用
        if(id.charAt(0)==='\'' && id.charAt(id.length - 1) === '\''){
            id = RegExpTool(id,/(?<=').*?(?=')/);
        }
        let arr = [];
        arr.push(name);
        arr.push(modularName[keyHG]['BUREAU']);
        arr.push(modularName[keyHG]['SUBJECT_NAME']);
        arr.push(1);
        arr.push(id);
        excelData.push(arr)

        console.log(data)

    } else {
        // console.log('文件不存在 或者对应的行局没有配置md文件')
    }
    return result
}
function getExcel() {
    let title = [
        'MODULE_NAME模块名称',
        'BUREAU行局名称',
        'SUBJECT_NAME主题名称',
        '备注（0：暂未开发；1：已开发；）',
        'ROUTER_ID路由ID（模块标识或URL）']
    excelData.unshift(title);
    let excel = xlsx.build([
        {
            name: '局映射',
            data: excelData
        }
    ]);
    fs.writeFileSync('./hg_excel.xlsx',excel);
}
// 正则工具
function RegExpTool(data,pattern) {
    let reg = new RegExp(pattern);
    return data.match(reg)[0];
}
getFaterFileName(); // 生成包含modular文件夹 的文件夹名
modularName = getNameHG(); // 获取行局对应的名称映射
getResultFile(); //  进行文件遍历
createdFile(); //生成 @/view/read-modular.js    模块引入文件
// getExcel(); // 生成局映射的excel文件


module.exports = result;


