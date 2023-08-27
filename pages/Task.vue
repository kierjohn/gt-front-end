<template>
  <div class="container mt-4">
    <button class="btn btn-danger" @click="logout">Logout</button>
    <h2>Task Management</h2>
    <div class="table-responsive">
      <table id="tasksTable" ref="tasksTable"class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- DataTables content will be generated here -->
        </tbody>
      </table>
    </div>
    <button class="btn btn-primary mt-3" @click="openModal('create')" >Add Task</button>
    <!-- Task CRUD form -->
    <!-- Task CRUD Modal -->
    <div class="modal" id="taskModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ modalTitle }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
            <div class="modal-body">
            <div class="form-group">
              <label for="title">Title</label>
              <input type="text" class="form-control" v-model="task.title">
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <textarea class="form-control" v-model="task.description"></textarea>
            </div>
            <div class="form-group">
              <label for="due_date">Due Date</label>
              <input type="date" class="form-control" v-model="task.due_date">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="saveTask">Save</button>
          </div>
        </div>
      </div>
    </div>
    <!-- ... -->
  </div>
</template>

<script>
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { get , post ,put , del } from '~/services/apiService';
import 'bootstrap';

export default {
  middleware : "auth",
  data() {
    return {
      table : null,
      tasks: [],
      modalTitle: '',
      // Add other task properties for modal form
      task: {
        id : null,
        title: '',
        description: '',
        due_date: '',
      },
       user_id : localStorage.getItem('user_id'),
    };
  },
  mounted() {

     $(document).ready(() => {
      this.initDataTable();
      });
  },
  computed: {
    apiBaseUrl() {
      return process.env.API_BASE_URL;
    },
  },
  methods: {
    initDataTable() {
      const url = `${this.apiBaseUrl.replace("https", "http")}/tasks/user/${this.user_id}`
      this.table  = $('#tasksTable').DataTable({
        ajax: {
          url: url,
          dataSrc: '',
        },
        columns: [
          { data: 'id' },
          { data: 'title' },
          { data: 'description' },
          { data: 'due_date' },
          {
            data: null,
            render: () => '<button class="btn btn-sm btn-info  btn-edit-custom">Edit</button>&nbsp;<button class="btn btn-sm btn-danger  btn-delete-custom">Delete</button>',
          },
        ],
        createdRow: (row, data) => {
          $(row).find('button.btn-edit-custom').click(() => this.openModal('edit', data));
          $(row).find('button.btn-delete-custom').click(() => this.deleteTask(data.id));
        },
      });
    },
    openModal(action, task = null) {
      console.log("datax" , task)
      this.modalTitle = action === 'create' ? 'Add Task' : 'Edit Task';
      if (task) {
        this.task = { ...task }; // Clone the task to prevent two-way binding
        this.task.due_date = new Date(this.task.due_date).toISOString().substr(0, 10); // Format due_date
          this.modalTitle = 'Edit Task';
      } else {
        this.task = {
          title: '',
          description: '',
          due_date: '',
          'user_id' : this.user_id,
        };
      }
      $('#taskModal').modal('show');
    },
    saveTask() {
     if (this.task.id) {
        // Editing existing task
        put( `tasks/${this.task.id}` , this.task)
          .then(response => {
            // Handle success, e.g., refresh DataTable
            $('#taskModal').modal('hide');
            this.fetchTasks(); // Assuming you have a method to fetch tasks
          })
          .catch(error => {
            // Handle error
            console.error(error);
          });
      } else {
        // Creating new task
        post( `tasks` , this.task)
          .then(response => {
            // Handle success, e.g., refresh DataTable
            $('#taskModal').modal('hide');
            this.fetchTasks(); // Assuming you have a method to fetch tasks
          })
          .catch(error => {
            // Handle error
            console.error(error);
          });
      }
    },
    fetchTasks(){
        this.table.ajax.reload();
    },

    deleteTask(taskId) {
      if (confirm("Are you sure you want to delete this task?")) {
        del(`tasks/${taskId}`)
          .then(() => {
            this.fetchTasks(); // Refresh tasks after deletion
          })
          .catch(error => {
            console.error(error);
          });
      }
    },

    logout() {
      // Clear the authentication token (replace with your own logic)
      localStorage.removeItem('authToken');

      // Redirect to the login page
      this.$router.push('/login');
    },
  },
};
</script>


<style scoped>
/* Add custom styling here */
</style>