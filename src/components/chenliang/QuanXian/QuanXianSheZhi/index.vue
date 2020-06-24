<!-- 系统权限-角色管理-权限设置 -->
<template>
	<el-container>
		<el-main style="background: #F9F9F9; padding: 0 !important;">
			<div align="left" class="top2">
				<i class="el-icon-s-home"></i>首页/权限/角色管理-权限设置
				<span class="floatR4">
					<router-link tag="span" to="/index/QuanXian/JueSe">
						<span><i class="el-icon-back"></i> 返回</span>
					</router-link>
					<span><i class="el-icon-refresh"></i> 刷新</span>
				</span>
			
			</div>
			<div class="clear"></div>
			<div align="left" class="bgColor8">
				当前角色：风控经理
				<div class="clear"></div>
			</div>
			<div class="clear"></div>
			<div class="bgColor9" align="center">
				<div class="border8">
					<div align="center" class="baocun">保存</div>
					<div align="left">
						<label><input type="checkbox" name="abc">产品工厂</label>
					</div>
					<el-row>
						<el-col :span="5">
							<div align="right">
								<label><input type="checkbox" name="abc">合同模板配置</label>
							</div>
						</el-col>
						<el-col :span="19">
							<div align="left" style="margin-left:15px">
								<label><input type="checkbox" name="abc">查看</label>
								<label><input type="checkbox" name="abc">新增</label>
								<label><input type="checkbox" name="abc">编辑</label>
								<label><input type="checkbox" name="abc">启用/禁用</label>
								<label><input type="checkbox" name="abc">导出</label>
								<label><input type="checkbox" name="abc">删除</label>
							</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="5">
							<div align="right">
								<label><input type="checkbox" name="abc">贷款材料管理</label>
							</div>
						</el-col>
						<el-col :span="19">
							<div align="left" style="margin-left:15px">
								<label><input type="checkbox" name="abc">查看</label>
								<label><input type="checkbox" name="abc">新增</label>
								<label><input type="checkbox" name="abc">编辑</label>
								<label><input type="checkbox" name="abc">启用/禁用</label>
								<label><input type="checkbox" name="abc">删除</label>
							</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="5">
							<div align="right">
								<label><input type="checkbox" name="abc">贷款产品配置</label>
							</div>
						</el-col>
						<el-col :span="19">
							<div align="left" style="margin-left:15px">
								<label><input type="checkbox" name="abc">查看</label>
								<label><input type="checkbox" name="abc">新增</label>
								<label><input type="checkbox" name="abc">编辑</label>
								<label><input type="checkbox" name="abc">提审</label>
								<label><input type="checkbox" name="abc">启用/关闭</label>
								<label><input type="checkbox" name="abc">删除</label>
							</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="5">
							<div align="right">
								<label><input type="checkbox" name="abc">贷款产品审核</label>
							</div>
						</el-col>
						<el-col :span="19">
							<div align="left" style="margin-left:15px">
								<label><input type="checkbox" name="abc">查看</label>
								<label><input type="checkbox" name="abc">审核</label>
							</div>
						</el-col>
					</el-row>
					<div align="left">
						<label><input type="checkbox" name="abc">借贷中心</label>
					</div>
					<el-row>
						<el-col :span="5">
							<div align="right">
								<label><input type="checkbox" name="abc">贷前管理</label>
							</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="7">
							<div align="right">
								<label><input type="checkbox" name="abc">准入授信管理</label>
							</div>
						</el-col>
						<el-col :span="17">
							<div align="left" style="margin-left:15px">
								<label><input type="checkbox" name="abc">查看</label>
								<label><input type="checkbox" name="abc">初审</label>
								<label><input type="checkbox" name="abc">初审</label>
								<label><input type="checkbox" name="abc">导出</label>
							</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="7">
							<div align="right">
								<label><input type="checkbox" name="abc">准入授信管理</label>
							</div>
						</el-col>
						<el-col :span="17">
							<div align="left" style="margin-left:15px">
								<label><input type="checkbox" name="abc">查看</label>
								<label><input type="checkbox" name="abc">复审</label>
								<label><input type="checkbox" name="abc">导出</label>
							</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="5">
							<div align="right">
								<label><input type="checkbox" name="abc">贷中管理</label>
							</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="7">
							<div align="right">
								<label><input type="checkbox" name="abc">产品授信</label>
							</div>
						</el-col>
						<el-col :span="17">
							<div align="left" style="margin-left:15px">
								<label><input type="checkbox" name="abc">查看</label>
								<label><input type="checkbox" name="abc">终审</label>
								<label><input type="checkbox" name="abc">导出</label>
							</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="7">
							<div align="right">
								<label><input type="checkbox" name="abc">合同管理</label>
							</div>
						</el-col>
						<el-col :span="17">
							<div align="left" style="margin-left:15px">
								<label><input type="checkbox" name="abc">查看</label>
								<label><input type="checkbox" name="abc">合同管理</label>
								<label><input type="checkbox" name="abc">提交放款审批</label>
								<label><input type="checkbox" name="abc">导出</label>
							</div>
						</el-col>
					</el-row>
				</div>
				<div align="center" class="quanbu">
					<label><input type="checkbox" name="abc">选择</label>
				</div>
				<div align="center" class="baocun">保存</div>
				<div align="center" style="margin: 20px;">Copyright &copy; 2018 深圳市xxxx金融科技有限公司, All Rights Reserved.</div>
			</div>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		
	}
</script>

<style>
	.quanbu{
		position: relative;
		border:1px solid #E4E4E4;
		background: #F9FAFC;
		padding: 15px 0;
		margin: 20px;
	}
	.border8{
		padding: 20px;
	}
	.border8 label{
		margin-right: 15px;
	}
	.border8>div{
		border-top: 1px solid #E4E4E4;
		margin: 10px 0;
		padding: 15px;
	}
	.border8>div:first-child{
		border: 0;
	}
	.baocun{
		background: #000;
		color: #fff;
		padding: 10px 15px;
		border-radius: 5px;
		width:100px;
		cursor: pointer;
	}
	.bgColor9 {
		width: 100%;
		margin-top: 30px;
		background: #fff;
	}
	.top2{
		padding: 20px 10px;
	}
	.bgColor8 {
		margin-top: 40px;
		background: #F3F3F3;
		padding: 14px;
		border-top:  1px solid #E4E4E4;
		border-bottom:  1px solid #E4E4E4;
	}
	.floatR4{
		float: right;
		margin-right: 10px;
	}
	.floatR4>span{
		border: 1px solid #E4E4E4;
		background: #fff;
		padding: 3px 7px;
		margin-left: 10px;
	}
</style>
