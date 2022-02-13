const employee={template:`
<div>
<button type="button" class="btn btn-primary m-2 fload-end" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="addClick()">
Add Employee
</button>


<table class="table table-striped">
    <thead>
        <tr>
            <th>
              <div class="d-flex flex-row">

                    <input class="form-control m-2" v-model="EmployeeIdFilter" v-on:keyup="FilterFn()" placeholder="Filter">

                </div>
                EmployeeId
            </th>
            <th>
            <div class="d-flex flex-row">

                <input class="form-control m-2" v-model="EmployeeNameFilter" v-on:keyup="FilterFn()" placeholder="Filter">

              </div>
              EmployeeName
             </th>
             <th>
                <div class="d-flex flex-row">

                  <input class="form-control m-2" v-model="DepartmentFilter" v-on:keyup="FilterFn()" placeholder="Filter">

                </div>
               Department
              </th>
              <th>
              <div class="d-flex flex-row">

              <input class="form-control m-2" v-model="DesignationFilter" v-on:keyup="FilterFn()" placeholder="Filter">

              </div>
                 Designation
              </th>
              <th>
              <div class="d-flex flex-row">

                 <input class="form-control m-2" v-model="DateOfJoiningFilter" v-on:keyup="FilterFn()" placeholder="Filter">

              </div>
                Date Of Joining
              </th>
              <th>
                Image
              </th>
             <th>
                Options
             </th>
        </tr>
    
        </thead>
    <tbody>
        <tr v-for="emp in employees">
            <td>{{emp.EmployeeId}}</td>
            <td>{{emp.EmployeeName}}</td>
            <td>{{emp.Department}}</td> 
            <td>{{emp.Designation}}</td>       
            <td>{{emp.DateOfJoining}}</td>        
            <td><img :src="PhotoPath+emp.PhotoFileName" width="110px" height="110px" alt="Photo" class="img-thumbnail"></td>
            <td>
                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                @click="editClick(emp)">
                
                <div class="btn btn-light mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                  </div>
                </button>
                <button type="button" @click="deleteClick(emp.EmployeeId)">
                <div class="btn btn-light mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                  </div>
                </button>
            </td>
        </tr>
    </tbody>
</table>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

    <div class="modal-dialog modal-lg modal-dialog-centered">

        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                <div class="d-flex flex-row bd-highlight mb-3">
                    <div class="p-2 w-50 bd-highlight">
                        <div class="input-group mb-3">
                            <span class="input-group-text">Name</span>
                            <input type="text" class="form-control" v-model="EmployeeName">
                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text">Department</span>
                            <select class="form-select" v-model="Department">
                                <option v-for="dep in departments">
                                    {{dep.DepartmenName}}
                                </option>
                            </select>
                        </div>
                        
                        <div class="input-group mb-3">
                            <span class="input-group-text">Designation</span>
                            <select class="form-select" v-model="Designation">
                                <option v-for="deg in designations">
                                    {{deg.DesignationTitle}}
                                </option>
                            </select>
                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text">DOJ</span>
                            <input type="date" class="form-control" v-model="DateOfJoining">
                        </div>

                    </div>
                    <div class="p-2 w-50 bd-highlight">
                        <img width="250px" height="250px" :src="PhotoPath+PhotoFileName">
                        <input class="m-2" type="file" @change="imageUpload">
                    </div>

                </div>

                <button type="button" v-if="EmployeeId==0" class="btn btn-primary" @click="createClick()">
                    Create
                </button>
                <button type="button"  @click="updateClick()" v-if="EmployeeId!=0" class="btn btn-primary">
                    Update
                </button>

            </div>
            
        </div>

    </div>

</div>

</div>
`,

data(){
    return{
        departments:[],
        designations:[],
        employees:[],
        modalTitle:"",
        EmployeeId:0,
        EmployeeName:"",
        Department:"",
        Designation:"",
        DateOfJoining:"",
        PhotoFileName:"anonymous.png",
        PhotoPath:variables.PHOTO_URL,
        EmployeeIdFilter:"",
        EmployeeNameFilter:"",
        DepartmentFilter:"",
        DateOfJoiningFilter:"",
        DesignationFilter:"",
        employeesWithoutFilter:[]
    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL+"employee")
        .then((response)=>{
            this.employees=response.data;
            this.employeesWithoutFilter=response.data;
        });
        axios.get(variables.API_URL+"department")
        .then((response)=>{
            this.departments=response.data;
        });
        
        axios.get(variables.API_URL+"designation")
        .then((response)=>{
            this.designations=response.data;
        });
    },
    addClick(){
        this.modalTitle="Add Employee";
        this.EmployeeId=0;
        this.EmployeeName="";
        this.Department="";
        this.DateOfJoining="";
        this.PhotoFileName="anonymous.png";
        this.Designation="";
        
    },
    editClick(emp){
        this.modalTitle="Edit Employee";
        this.EmployeeId=emp.EmployeeId;
        this.EmployeeName=emp.EmployeeName;
        this.Department=emp.Department;
        this.DateOfJoining=emp.DateOfJoining;
        this.PhotoFileName=emp.PhotoFileName
        this.Designation=emp.Designation
    },
    createClick(){
        axios.post(variables.API_URL+"employee",{
            EmployeeName:this.EmployeeName,
            Department:this.Department,
            DateOfJoining:this.DateOfJoining,
            PhotoFileName:this.PhotoFileName,
            Designation:this.Designation
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    updateClick(){
        axios.put(variables.API_URL+"employee",{
            EmployeeId:this.EmployeeId,
            EmployeeName:this.EmployeeName,
            Department:this.Department,
            DateOfJoining:this.DateOfJoining,
            PhotoFileName:this.PhotoFileName,
            Designation:this.Designation
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    deleteClick(id){
        if(!confirm("Are you sure?")){
            return;
        }
        axios.delete(variables.API_URL+"employee/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    imageUpload(event){
        let formData=new FormData();
        formData.append('file',event.target.files[0]);
        axios.post(
            variables.API_URL+"employee/savefile", formData)
            .then((response)=>{
                this.PhotoFileName=response.data;
            });
        
    },
    FilterFn(){
        var EmployeeIdFilter=this.EmployeeIdFilter;
        var EmployeeNameFilter=this.EmployeeNameFilter;
        var DepartmentFilter=this.DepartmentFilter;
        var DateOfJoiningFilter=this.DateOfJoiningFilter;
        var DesignationFilter=this.DesignationFilter;
        

        this.employees=this.employeesWithoutFilter.filter( function(el){
                return el.EmployeeId.toString().toLowerCase().includes(
                    EmployeeIdFilter.toString().trim().toLowerCase()
                )&&
                el.EmployeeName.toString().toLowerCase().includes(
                    EmployeeNameFilter.toString().trim().toLowerCase()
                )&&
                el.Department.toString().toLowerCase().includes(
                    DepartmentFilter.toString().trim().toLowerCase()
                )&&
                el.DateOfJoining.toString().toLowerCase().includes(
                    DateOfJoiningFilter.toString().trim().toLowerCase()
                )&&
                el.Designation.toString().toLowerCase().includes(
                    DesignationFilter.toString().trim().toLowerCase()
                )
            });
    }
},
mounted:function(){
    this.refreshData();
}

}