class View {

    get home() {
        return Promise.resolve(`
                <section class="hero is-info is-small spacer">
                <div class="hero-body">
                    <h1 class="title">Employee's</h1>
                </div>
                </section>
                <p data-bind-model="deleteResultMsg" data-bind-safe data-bind-class="{'is-success': 'isDeleted', 'is-danger': '!isDeleted' }" class="notification is-spaced"></p>              
                <table class="table is-spaced is-bordered is-hoverable is-fullwidth is-small">
                  <thead>
                    <tr class="is-selected">
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last name</th>
                        <th>Department</th>
                        <th>Date</th>
                        <th>Job Title</th>
                        <th>Salary</th>
                        <th></th>
                        <th></th>
                    </tr>
                  </thead>
                  <tbody data-bind-model="employeesTable"></tbody>
              </table>`)
    }
    
     get add() {
        return Promise.resolve(`<section class="hero is-info is-small spacer">
                    <div class="hero-body">
                        <h1 class="title">Add New Employee</h1>
                    </div>
                </section>
                <form data-no-submit>
                    <div class="field">
                        <label class="label">Title</label>
                        <input type="text" name="firstName" placeholder="First Name" class="input" required />
                        <input type="text" name="lastName" placeholder="Last Name" class="input" required />
                    </div>
                    <div class="department">
                        <label class="label">Department</label>
                        <select name="department" class="select" required>
                            <option value=""></option>
                            <option value="manager">Manager</option>
                            <option value="IT">IT</option>
                            <option value="HR">HR</option>
                            <option value="secretary">Secretary</option>
                        </select>
                    </div>
                    <div class="field">
                        <input class="input" type="date" name="startDate" placeholder="Date" required>
                        <br />
                        <input class="input" type="text" name="jobTitle" placeholder="Job Title" required>
                        <br />
                        <input class="input" type="number" name="salary" placeholder="Salary" required>
                    </div>
                    <div class="field"> 
                        <input type="reset" value="reset" />
                        <input type="button" value="submit" class="button is-link" data-bind-event="click:saveTodo" /> 
                    </div>
                    <p data-bind-model="saveResultMsg" data-bind-safe data-bind-class="{'is-success': 'isAdded', 'is-danger': '!isAdded' }" class="notification"></p>
                </form>`)
    }

    get update() {
        return Promise.resolve(`<section class="hero is-info is-small spacer">
                    <div class="hero-body">
                        <h1 class="title">Update Todo ID <span data-bind-model="id" class="has-text-warning"></span></h1>
                    </div>
                </section>
                <form data-no-submit>
                    <div class="field">
                        <label class="label">Title</label>
                        <input type="text" name="title" class="input" required />
                    </div>
                    <div class="field">
                        <label class="label">Completed</label>
                        <select name="completed" class="select" required>
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>
                    </div>
                    <div class="field">
                        <input type="button" value="submit" data-bind-event="click:updateTodo" class="button is-link" />
                    </div>
                    <p data-bind-model="updateResultMsg" data-bind-safe data-bind-class="{'is-success': 'isUpdated', 'is-danger': '!isUpdated' }" class="notification is-spaced"></p>
                </form>`)
    }
    
}