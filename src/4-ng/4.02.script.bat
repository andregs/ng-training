npm i -S ngx-bootstrap bootstrap@next

ng g m core
ng g m shared
ng g m login
ng g m shop
ng g m admin
ng g m my-orders

cd core
ng g c menu
ng g c error

cd ../login
ng g c login --flat true

cd ../shop
ng g c shop --flat true
ng g c product-card
ng g c cart

cd ../admin
ng g c admin --flat true
ng g c users
ng g c users/user-list
ng g c users/user-form
ng g c products

cd ../my-orders
ng g c my-orders --flat true

cd ..
