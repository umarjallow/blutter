import React, {Component} from 'react';
import {PageHeader, Button, Upload, message, Table, Layout, Menu} from 'antd';
import csvToJSON from 'csv-file-to-json'
import {Link} from 'react-router-dom'
import "./design.css"
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

const {Header, Sider, Content, Footer} = Layout;

const columns = [
    {
        title: 'REF.',
        width: 100,
        dataIndex: 'reference',
        key: '1',
        fixed: 'left',
    },
    {
        title: 'DATE OV',
        width: 100,
        dataIndex: 'transfer_order_date',
        key: '2',
        fixed: 'left',
    },
    {
        title: 'N°OV',
        dataIndex: 'transfer_order_number',
        key: '3',
        width: 150,
    },
    {
        title: 'GUICHET',
        dataIndex: 'counter',
        key: '4',
        width: 150,
    },
    {
        title: 'TYPE CLIENT',
        dataIndex: 'client_type',
        key: '5',
        width: 150,
    },
    {
        title: 'NOM STRUCTURE',
        dataIndex: 'structure_name',
        key: '6',
        width: 150,
    },
    {
        title: 'FORME JURIDIQUE',
        dataIndex: 'legal_form',
        key: '7',
        width: 150,
    },
    {
        title: 'PRENOM',
        dataIndex: 'firstname',
        key: '8',
        width: 150,
    },
    {
        title: 'NOM',
        dataIndex: 'lastname',
        key: '9',
        width: 150,
    },
    {
        title: 'GENRE',
        dataIndex: 'gender',
        key: '10',
        width: 150,
    },
    {
        title: 'ADRESSE',
        dataIndex: 'address',
        key: '11',
        width: 150,
    },
    {
        title: 'DATE NAISSANCE',
        dataIndex: 'date_of_birth',
        key: '12',
        width: 150,
    },
    {
        title: 'LIEU NAISSANCE',
        dataIndex: 'birthplace',
        key: '13',
        width: 150,
    },
    {
        title: 'CNI/PASSPORT',
        dataIndex: 'cid',
        key: '14',
        width: 150,
    },
    {
        title: 'DATE DELIVRANCE_CNI',
        dataIndex: 'cid_issue_date',
        key: '15',
        width: 150,
    },
    {
        title: 'DATE EXPIRATION CNI',
        dataIndex: 'cid_expire_date',
        key: '16',
        width: 150,
    },
    {
        title: 'RCCM',
        dataIndex: 'rccm',
        key: '17',
        width: 150,
    },
    {
        title: 'DATE DELIVRANCE RCCM',
        dataIndex: 'rccm_issue_date',
        key: '18',
        width: 150,
    },
    {
        title: 'LIEU DELIVRANCE RCCM',
        dataIndex: 'rccm_issue_place',
        key: '19',
        width: 150,
    },
    {
        title: 'NINEA',
        dataIndex: 'ninea',
        key: '20',
        width: 150,
    },
    {
        title: 'TELEPHONE',
        dataIndex: 'telephone',
        key: '21',
        width: 150,
    },
    {
        title: 'IFP',
        dataIndex: 'partner_financial_institution',
        key: '22',
        width: 150,
    },
    {
        title: 'TITRE PROJET',
        dataIndex: 'project_title',
        key: '23',
        width: 150,
    },
    {
        title: 'SECTEUR',
        dataIndex: 'sector',
        key: '24',
        width: 150,
    },
    {
        title: 'ACTIVITE',
        dataIndex: 'activity',
        key: '25',
        width: 150,
    },
    {
        title: 'REGION',
        dataIndex: 'region',
        key: '26',
        width: 150,
    },
    {
        title: 'DEPARTEMENT',
        dataIndex: 'department',
        key: '27',
        width: 150,
    },
    {
        title: 'COMMUNE',
        dataIndex: 'town',
        key: '28',
        width: 150,
    },
    {
        title: 'PRODUIT FINANCIER',
        dataIndex: 'financial_product',
        key: '29',
        width: 150,
    },
    {
        title: 'MONTANT ACCORDE',
        dataIndex: 'amount_awarded',
        key: '30',
        width: 150,
    },
    {
        title: 'PLAN DECAISSEMENT',
        dataIndex: 'disbursement_plan',
        key: '31',
        width: 150,
    },
    {
        title: 'PREMIER DECAISSEMENT',
        dataIndex: 'first_disbursement',
        key: '32',
        width: 150,
    },
    {
        title: 'DEUXIEME DECAISSEMENT',
        dataIndex: 'second_disbursement',
        key: '33',
        width: 150,
    },
    {
        title: 'TROISIEME DECAISSEMENT',
        dataIndex: 'third_disbursement',
        key: '34',
        width: 150,
    },
    {
        title: 'MONTANT APPORT',
        dataIndex: 'amount_contributed',
        key: '35',
        width: 150,
    },
    {
        title: 'TAUX',
        dataIndex: 'interest_rate',
        key: '36',
        width: 150,
    },
    {
        title: 'DUREE',
        dataIndex: 'duration_in_months',
        key: '37',
        width: 150,
    },
    {
        title: 'MONTANT DÛ',
        dataIndex: 'amount_due',
        key: '38',
        width: 150,
    },
    {
        title: 'DIFFERE',
        dataIndex: 'deferred_in_months',
        key: '39',
        width: 150,
    },
    {
        title: 'MODE ECHEANCE',
        dataIndex: 'term',
        key: '40',
        width: 150,
    },
    {
        title: 'GARANTIES CONTREPARTIES',
        dataIndex: 'guarantee',
        key: '41',
        width: 150,
    },
    {
        title: 'CONDITIONS SUSPENSIVES',
        dataIndex: 'conditions_precedent',
        key: '42',
        width: 150,
    },
    {
        title: 'OBSERVATIONS',
        dataIndex: 'observations',
        key: '43',
        width: 150,
    },
    {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        //render: () => <a>action</a>,
    },
];


class Blotter extends Component {


    state = {
        dataFromFile: [],
        collapsed: false,
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    transform = (file) => {
        return new Promise(resolve => {
                const reader = new FileReader();
                reader.onload = () => {
                    let csv = reader.result;
                    const output = csvToJSON({data: csv, separator: ";", header: false});
                    this.setState({
                        dataFromFile: output
                    })
                };
                reader.readAsText(file);
            }
        );
    }

    televerserFile = () => {
        console.log("brute ", this.state.dataFromFile);
        const {dataFromFile} = this.state;
        let treatedData = dataFromFile.map((data) => {
            return {
                ...data,
                cid : {
                    number : data.cid,
                    issue_date : data.cid_issue_date,
                    expire_date : data.cid_expire_date,
                },
                rccm : {
                    number : data.rccm,
                    issue_date : data.rccm_issue_date,
                    issue_place : data.rccm_issue_place
                }
            }
        })
        for (let key in treatedData) {
            delete treatedData[key].cid_issue_date
            delete treatedData[key].cid_expire_date
            delete treatedData[key].rccm_issue_date
            delete treatedData[key].rccm_issue_place
        }
        console.log(treatedData)
    }

    render() {


        const props = {
            name: 'file',
            action: '',
            headers: {
                authorization: 'authorization-text',
            },
            transformFile: this.transform,
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };


        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined/>}>
                            nav 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                            nav 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined/>}>
                            nav 3
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <div className="App">
                            <PageHeader
                                ghost={false}
                                title="Liste des ordres de virements"
                                extra={[
                                    <Button key="2" disabled={this.state.dataFromFile.length === 0} type="primary"
                                            onClick={this.televerserFile}> Uploadez </Button>,
                                    <Upload {...props} accept=".csv">
                                        <Button key="1">
                                            <UploadOutlined/> Charger pour visualiser votre fichier
                                        </Button>
                                    </Upload>
                                ]}
                            >
                            </PageHeader>
                            <div style={{background: '#fff', padding: 24, minHeight: 280}}>
                                <Table columns={columns} dataSource={this.state.dataFromFile}
                                       scroll={{x: 1500}}/>,
                            </div>
                        </div>
                    </Content>
                    <Footer style={
                        {textAlign: 'center', position: 'fixed', left: 0, bottom: 0, width: '100%', color: '#001529'}
                    }>
                        &copy; Copyright - {new Date().getFullYear()} <strong><Link
                        to="https://der.sn">DER/FJ</Link></strong>. All Rights Reserved
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Blotter;
