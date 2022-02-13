1. Create ui folder
2. Now create index.html file and write the html code with your view page and js cdn link..
    Then create the js file your view page and other jf file variables.js, app.js

     <script src="variables.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.5.3/vue-router.js"></script>
    <script src="home.js"></script>
    <script src="department.js"></script>
     <script src="designation.js"></script>
    <script src="app.js"></script>

3. index.html file write the code in view the layout

<nav class="navbar navbar-expand-sm bg-light navbar-dark">
                <ul class="navbar-nav">
                    <li class="nav-item m-1">
                        <router-link class="btn btn-light btn-outline-primary" to="/home">Home</router-link>
                    </li>
                    <li class="nav-item m-1">
                        <router-link class="btn btn-light btn-outline-primary" to="/department">Department</router-link>
                    </li>
                    <li class="nav-item m-1">
                        <router-link class="btn btn-light btn-outline-primary" to="/designation">Designation</router-link>
                    </li>
                </ul>
            </nav>
            <!-- view layout
            <router-view></router-view>

4. flow the code write in app.js

    const routes=[
    {path:'/home',component:home},
    {path:'/employee',component:employee},
    {path:'/department',component:department},
    {path:'/designation',component:designation}
    ]

    const router=new VueRouter({
        routes
    })

    const app = new Vue({
        router
    }).$mount('#app')

5. flow the code write in variables.js

const variables={
    API_URL:"http:127.0.0.1:8000/"
}

6. department.js

const department={template:`
<div>
<button type="button" class="btn btn-primary m-2 fload-end" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="addClick()">
Add Department
</button>


<table class="table table-striped">
    <thead>
        <tr>
            <th>

                <div class="d-flex flex-row">

                    <input class="form-control m-2" v-model="DepartmenIdFilter" v-on:keyup="FilterFn()" placeholder="Filter">

                </div>
                Department
            </th>
            <th>

            <div class="d-flex flex-row">

              <input class="form-control m-2" v-model="DepartmenNameFilter" v-on:keyup="FilterFn()" placeholder="Filter">

            </div>
                DepartmentName
             </th>
             <th>
                Options
                </th>
        </tr>
    
        </thead>
    <tbody>
        <tr v-for="dep in departments">
            <td>{{dep.DepartmenId}}</td>
            <td>{{dep.DepartmenName}}</td>
            <td>
                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                @click="editClick(dep)">
                
                <div class="btn btn-light mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                  </div>
                </button>
                <button type="button" @click="deleteClick(dep.DepartmenId)">
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

                <div class="input-group mb-3">
                    <span class="input-group-text">Department Name</span>
                    <input type="text" class="form-control" v-model="DepartmenName">
                </div>

                <button type="button" v-if="DepartmenId==0" class="btn btn-primary" @click="createClick()">
                    Create
                </button>
                <button type="button"  @click="updateClick()" v-if="DepartmenId!=0" class="btn btn-primary">
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
        modalTitle:"",
        DepartmenName:"",
        DepartmenId:0,
        DepartmenNameFilter:"",
        DepartmenIdFilter:"",
        departmentsWithoutFilter:[]
    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL+"department")
        .then((response)=>{
            this.departments=response.data;
            this.departmentsWithoutFilter=response.data;
        });
    },
    addClick(){
        this.modalTitle="Add Department";
        this.DepartmenId=0;
        this.DepartmenName="";
    },
    editClick(dep){
        this.modalTitle="Edit Department";
        this.DepartmenId=dep.DepartmenId;
        this.DepartmenName=dep.DepartmenName;
    },
    createClick(){
        axios.post(variables.API_URL+"department",{
            DepartmenName:this.DepartmenName
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    updateClick(){
        axios.put(variables.API_URL+"department",{
            DepartmenId:this.DepartmenId,
            DepartmenName:this.DepartmenName
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
        axios.delete(variables.API_URL+"department/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    }
},
mounted:function(){
    this.refreshData();
}

}

