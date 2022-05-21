package handler

import (
	"encoding/json"
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"net/http"
	"regexp"
	"strconv"
)

// メールアドレスから所属学部、学科を検索し、返す
func GetFacultyData() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		//var eMailAddress EMailAddress
		var facultyID FacultyID
		//err := json.NewDecoder(r.Body).Decode(&eMailAddress)
		//if err != nil {
		//	fmt.Println(err)
		//	w.WriteHeader(http.StatusInternalServerError)
		//	return
		//}
		mutchAddr := regexp.MustCompile(`[\d]{4}`)
		//res := mutchAddr.FindStringSubmatch(eMailAddress.Address)
		data, _ := json.Marshal(&EMailAddress{
			Address: r.URL.Query().Get("address"),
		})
		res := mutchAddr.FindStringSubmatch(string(data))
		facultyID.Id, _ = strconv.Atoi(res[0])

		dsn := "root:root@tcp(localhost:3306)/gidai_pastprob?charset=utf8&parseTime=true&loc=Asia%2FTokyo"
		db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
		if err != nil {
			panic(err)
		}
		var facultyData FacultyData
		err = db.Table("faculties").Select("*").Where("faculty_id", facultyID.Id).Find(&facultyData).Error
		if err != nil {
			panic(err)
		}
		data, err = json.Marshal(facultyData)
		fmt.Println(string(data))
		w.Write(data)
	}
}

func Test() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		data, _ := json.Marshal(&EMailAddress{
			Address: r.URL.Query().Get("address"),
		})
		fmt.Println("データよん", data)
		w.Write(data)
	}
}

func GetFacultyDataTest() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var eMailAddress EMailAddress
		var facultyID FacultyID
		err := json.NewDecoder(r.Body).Decode(&eMailAddress)
		if err != nil {
			fmt.Println(err)
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		mutchAddr := regexp.MustCompile(`[\d]{4}`)
		res := mutchAddr.FindStringSubmatch(eMailAddress.Address)
		facultyID.Id, _ = strconv.Atoi(res[0])
	}
}

type TestData struct {
	Test string `json:"test"`
}

type EMailAddress struct {
	Address string `json:"address"`
}

// 学部・学科データのみを調べる
// 学年については取得しないためIdがint型になっている
type FacultyID struct {
	Id int `json:"id"`
}

// DBから取得したデータをはめる構造体
type FacultyData struct {
	FacultyID  int    `json:"faculty_id"`
	Faculty    string `json:"faculty"`
	Department string `json:"department"`
}
