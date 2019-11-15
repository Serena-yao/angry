import React from 'react';
import { Table, Divider, Button } from 'antd'
import {Link} from 'dva/router';
// import request from '../../../../utils/request'
import { connect } from 'dva';

  const mapStateToProps=state=>{
    return {
      list:state.gov.list
    }
  }
  const mapDispatchToProps=dispatch=>{
    return {
      getGovList:()=>{
        dispatch({
          type:'gov/getGovList'
        })
      },
      goDetail:payload=>{
        dispatch({
          type:'gov/goDetail',
          payload
        })
      }
    }
  }
  @connect(mapStateToProps,mapDispatchToProps)
  class GovList extends React.Component{
    componentDidMount()
    {
        this.props.getGovList();
    }

    // 新增机构
  newGov(){
    this.props.goDetail({
      type: 'new',
      info: {}
    })
  }

    columns = [
      {
        title: '序号',
        dataIndex: 'id',
        key: 'id'
        // render: text => <img src="https://img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_4630acaf467975cc49c2a6dec9fd53df/0" title={text}/>
      },
      {
        title: '机构名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '所在地区',
        dataIndex: 'area',
        key: 'area',
      },
      {
        title: '校长姓名',
        dataIndex: 'master',
        key: 'master',
      },
      {
        title: '校长手机号',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: '是否可用',
        dataIndex: 'enable',
        key: 'enable',
        render: text=><span>{text?'是':'否'}</span>
      },
      {
        title: '操作',
        key: 'index',
        render: (text, record) => (
          <span>
            <Link to="/main/addGov" onClick={()=>this.props.goDetail({type:'detail', info: record})}>
              <span>详情</span>
            </Link>
            <Divider type="vertical" />
            <Link to="/main/addGov" onClick={()=>this.props.goDetail({type:'edit', info: record})}>
              <span>编辑</span>
            </Link>
          </span>
        ),
      },
    ];
    render(){
      console.log("123445",this.props)
      let {list}=this.props
        return <>
            <Link to="/main/addGov" onClick={this.newGov.bind(this)}>
                <Button type="primary" style={{marginBottom:'20px'}} >新增</Button>
            </Link>
            <Table columns={this.columns} dataSource={list} rowKey="id" />
        </>
    }
  }
  export default GovList;