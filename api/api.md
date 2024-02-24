## Function Name: fn_delete_question_by_id
#### Description:

This function uses a DELETE statement to remove the question with the specified ID from the "questions" table.

Inputs:

question_id: An INT parameter representing the ID of the question to be deleted.

Outputs:

The function returns VOID, indicating that it doesn't return any value.

Usage:

You can call this function with a specific question ID to delete the corresponding question.





## Function Name: fn_display_questions

Inputs:

No inputs are required for this function.

Outputs:

This function returns a TABLE with the following columns:

id: An INT representing the question ID.
brief_question: A VARCHAR(255) containing the brief description of the question.
long_question: A TEXT field containing the detailed content of the question.

Description:

This function utilizes a SELECT statement to retrieve information from the "questions" table. It fetches the ID, brief description, and detailed content of all questions.

Usage:

Executing the function using SELECT * FROM fn_display_questions(); 





## Function Name: fn_insert_question
Description:

This function is designed to insert a new question into the "questions" table. It takes two input parameters, p_brief_question for the brief description and p_long_question for the detailed content. Inside the function, an INSERT INTO statement is used to add a new record to the table with the provided information.



Inputs:

p_brief_question: A VARCHAR(255) parameter representing the brief description of the question.

p_long_question: A TEXT parameter representing the detailed content of the question.

Outputs:

The function returns VOID, indicating that it doesn't return any value.
example:


SELECT fn_insert_question('Brief Description', 'Detailed Content');

## Function Name: fn_delete_all_questions

Inputs: None

Outputs:

The function returns VOID, indicating that it doesn't return any value.

Description:

This function is designed to delete all questions from the "questions" table. Inside the function, a DELETE FROM statement is used to remove all records from the table.

example:
SELECT fn_delete_all_questions();




## Function Name: fn_update_question

Inputs:

question_id: An INT parameter representing the ID of the question to be updated.
new_brief_question: A VARCHAR(255) parameter representing the new brief question.
new_long_question: A TEXT parameter representing the new long question.

Outputs:

The function returns VOID, indicating that it doesn't return any value.

Description:

This function is designed to update a question in the "questions" table based on the provided question ID. It uses an UPDATE statement to set the new values for the brief_question and long_question columns where the ID matches the specified question_id.

example output:

SELECT fn_update_question(1, 'New Brief Question', 'New Long Question');

